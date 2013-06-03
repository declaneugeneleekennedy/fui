define(
['jquery', 'vpl/view', 'viewModels/PageViewModel'],
function($, VplView, PageViewModel) {
    return VplView.extend({        
        template: '/templates/page/Form.html',
        viewModel: new PageViewModel,
        initialize: function() {
            var $t = this;

            // check display rules to ensure page is meant to display
            $t.bind('fetchComplete', function() {
                var destination = $t.viewModel.get('destination');
                if(destination) {
                    $t.goTo(destination);
                }
            });

            // attach sections and elements to DOM, bind element change events
            $t.bind('renderComplete', function() {
                $t.viewModel.getCollection('sections').each(function(section) {
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
                });
            });
        }
    });
});