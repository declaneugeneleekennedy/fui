define(
['jquery', 'vpl/view', 'viewModels/PageViewModel'],
function($, VplView, PageViewModel) {
    return VplView.extend({        
        template: '/templates/page/Form.html',
        viewModel: null,
        getPersistentViewModel: function() {
            return window.viewModel || new PageViewModel;
        },
        setPersistentViewModel: function(viewModel) {
            window.viewModel = viewModel;
        },
        initialize: function() {
            var $t = this;

            // @todo [dk] - need a cleaner way to do this
            $t.viewModel = $t.getPersistentViewModel();            

            // check display rules to ensure page is meant to display
            $t.viewModel.bind('fetchComplete', function() {
                var destination = $t.viewModel.get('destination');
                if(destination) {
                    $t.goTo(destination);
                }

                // PLACEHOLDER - prepare progress links for testing viewModel persistence
                var links = {}, prefix = '/#' + $t.viewModel.getModel('form').get('formUrl');
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
                        var contentElement = $(content.getHtml($t.viewModel.getModel('form')));

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

                        // bind validity change events
                        content.bind('change:valid', function() {
                            // default state is null - neither valid nor invalid
                            if(content.get('valid') == null) {
                                return;
                            }

                            var oldClass, newClass;
                            if(content.get('valid')) {
                                console.log('Content is valid');
                                oldClass = 'invalid';
                                newClass = 'valid';
                            } else {
                                console.log('Content is invalid');
                                oldClass = 'valid';
                                newClass = 'invalid';
                            }

                            contentElement
                                .removeClass(oldClass)
                                .addClass(newClass);
                        });

                        // bind change events
                        content.bindChanges(contentElement);

                        ('.sectionBody', sectionElement).append(contentElement);
                    });

                    // append the section
                    $('#formContainer form', $t.$el).append(sectionElement);
                });

                $t.setPersistentViewModel($t.viewModel);
            });
        }
    });
});