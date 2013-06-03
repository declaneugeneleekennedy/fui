define(
['underscore', 'backbone', 'vpl/viewModel', 'models/FormModel', 'models/ContentCollection'],
function(_, Backbone, VplViewModel, FormModel, ContentCollection) {
    return VplViewModel.extend({
        models: {form: new FormModel},
        assignVars: function(args) {
            var $t = this;

            // assign page and sections for convenience
            var pages = $t.getModel('form').get('pages');

            $t.addModel('page', pages.findWhere({pageUrl: args.pageUrl}));
            $t.addCollection('sections', $t.getModel('page').get('sections'));

            // create a mapping of display rule trigger IDs to content IDs and create flat content collection
            var sectionRuleMap  = {};
            var contentRuleMap  = {};
            var contents        = new ContentCollection;

            $t.getCollection('sections').each(function(section) {
                section.get('displayRule').get('rules').each(function(rule) {
                    if(!sectionRuleMap[rule.get('triggerContentId')]) {
                        sectionRuleMap[rule.get('triggerContentId')] = [];
                    }

                    sectionRuleMap[rule.get('triggerContentId')].push(section.get('sectionId'));
                });

                section.get('contents').each(function(content) {
                    content.get('displayRule').get('rules').each(function(rule) {
                        if(!contentRuleMap[rule.get('triggerContentId')]) {
                            console.log('Initializing IDs triggered by %s', rule.get('triggerContentId'));
                            contentRuleMap[rule.get('triggerContentId')] = [];
                        }

                        contentRuleMap[rule.get('triggerContentId')].push(content.get('contentId'));
                    });

                    // add to flat content collection
                    contents.add(content);
                });
            });

            console.log(sectionRuleMap, 'Section Rule Map');
            console.log(contentRuleMap, 'Content Rule Map');
            console.log(contents,       'Flat Content Collection');

            $t.addVar('sectionRuleMap',     sectionRuleMap);
            $t.addVar('contentRuleMap',     contentRuleMap);
            $t.addCollection('contents',    contents);

            /*
             * Now that all of the mappings have been made, bind relevant change events
             * to the appropriate models
             */

             var bindMap = {
                sections: sectionRuleMap,
                contents: contentRuleMap
             }

             _.each(bindMap, function(ruleMap, collection) {
                _.each(ruleMap, function(modelIds, id) {             
                    $t.getCollection('contents').findWhere({contentId: parseInt(id)}).bind('change:value', function() {
                        var affected = $t.getCollection(collection).filter(function(model) {
                            return _.indexOf(modelIds, model.id) != -1;
                        });

                        _.each(affected, function(model) {
                            model.set('display', $t.checkDisplayRule(model.get('displayRule')));
                        });
                    });
                });
             });

            // set all current/default values (PLACEHOLDER to trigger initial display rule events)
            $t.getCollection('contents').each(function(content) {
                content.trigger('change:value');
            });
        },
        checkDisplayRule: function(displayRule) {
            var $t = this, passCount = 0;

            displayRule.get('rules').each(function(rule) {
                console.log(rule, 'Checking Rule');
                var ruleValue = rule.get('value');
                var formValue = $t.getCollection('contents')
                    .findWhere({contentId: rule.get('triggerContentId')})
                    .get('value');

                var operator = rule.get('operator');

                if($t.compareByRule(ruleValue, formValue, operator)) {
                    ++passCount;
                }
            });

            return ((displayRule.get('logicalOperator') == 'or' && passCount > 0) ||
                    passCount == displayRule.get('rules').length);
        },
        compareByRule: function(ruleValue, formValue, operator) {
            switch(operator) {
                case '>':
                    return (formValue > ruleValue);
                    break;
                case '<':
                    return (formValue < ruleValue);
                    break;
                case '>=':
                    return (formValue >= ruleValue);
                    break;
                case '<=':
                    return (formValue <= ruleValue);
                    break;
                case '!=':
                    return (formValue != ruleValue);
                case '==':
                default:
                    return (formValue == ruleValue);
                    break;
            }
        }
    });
});
