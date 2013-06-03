define(
['jquery', 'backbone', 'models/DisplayRuleModel',
    'models/ContentAttributeModelFactory', 'models/ContentElementModelFactory'],
function($, Backbone, DisplayRuleModel, ContentAttributeModelFactory, ContentElementModelFactory) {
    return Backbone.Model.extend({
        defaults: {
            contentId: null,
            contentTypeId: null,
            tooltip: '',
            value: '',
            displayRule: {},
            contentAttributes: {},
            contentElement: {},
            display: true
        },
        initialize: function() {
            var $t = this;

            $t.attributes.displayRule = new DisplayRuleModel($t.get('displayRule'));

            $t.attributes.contentAttributes =
                ContentAttributeModelFactory.getInstance(
                    $t.get('contentTypeId'),
                    $t.get('contentAttributes'));

            $t.attributes.contentElement =
                ContentElementModelFactory.getInstance($t.get('contentTypeId'));
        },
        getHtml: function() {
            var $t = this;

            return $(document.createElement('div'))
                .attr('id', 'element_' + $t.get('contentId'))
                .addClass('contentElement')
                .append($($t.renderElement()));

        },
        renderElement: function() {
            var $t = this;

            var data = {
                contentId:          $t.get('contentId'),
                tooltip:            $t.get('tooltip'),
                value:              $t.get('value'),
                contentAttributes:  $t.get('contentAttributes').toJSON()
            };

            return $t.get('contentElement').getHtml(data);
        },
        setElement: function(element) {
            var $t = this;

            $t.get('contentElement').set('element', element);
            
            // bind the change event for display as the element has been added
            $t.bind('change:display', function(content) {
                var element = $t.get('contentElement').get('element');
                if(content.get('display')) {
                    element.show();
                } else {
                    element.hide();
                }
            });
        }
    });
});
