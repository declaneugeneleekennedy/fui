define(
['jquery', 'vpl/view', 'viewModels/PageViewModel'],
function($, VplView, PageViewModel) {
    return VplView.extend({        
        template: '/templates/page/Form.html',
        viewModel: null,
        initialize: function() {
            var $t = this;

            // @todo [dk] - need a cleaner way to do this
            $t.viewModel = window.viewModel || new PageViewModel;            

            // check display rules to ensure page is meant to display
            $t.viewModel.bind('fetchComplete', function() {
                var destination = $t.viewModel.get('destination');
                if(destination) {
                    $t.goTo(destination);
                }

                // PLACEHOLDER - prepare progress links for testing viewModel persistence
                var links = {}, prefix = '/' + $t.viewModel.getModel('form').get('formUrl');
                $t.viewModel.getModel('form').get('pages').each(function(page) {
                    links[page.get('pageTitle')] = prefix + '/' + page.get('pageUrl');
                });

                $t.viewModel.addVar('links', links);

                $t.setTitle($t.viewModel.getModel('page').get('pageTitle'));
            });

            // attach sections and elements to DOM, bind element change events
            $t.bind('renderComplete', function() {
                $t.viewModel.getModel('page').get('sections').each(function(section) {
                    var sectionElement = $(section.getHtml());

                    section.bind('change:display', function() {
                        if(section.get('display')) {
                            sectionElement.show();
                        } else {
                            sectionElement.hide();
                        }
                    });

                    section.trigger('change:display');

                    section.get('contents').each(function(content) {
                        var contentElement = $(content.getHtml());

                        // bind display rule events

                        content.bind('change:display', function() {
                            if(content.get('display')) {
                                contentElement.show();
                            } else {
                                contentElement.hide();
                            }
                        });

                        // trigger initial event
                        content.trigger('change:display');

                        // bind change event
                        var changeEvent = content.get('contentElement').get('changeEvent');
                        $('*[name="input_' + content.get('contentId') + '"]', contentElement).bind(changeEvent, function() {
                            if($(this).val() != content.get('value')) {
                                content.set('value', $(this).val());
                            }
                        });

                        sectionElement.append(contentElement);
                    });

                    // append the section
                    $('#form-container form', $t.$el).append(sectionElement);

                    // persist the view model
                    window.viewModel = $t.viewModel;
                });
            });
        }
    });
});