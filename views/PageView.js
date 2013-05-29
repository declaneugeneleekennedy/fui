define(
['jquery', 'vpl/view', 'viewModels/PageViewModel'],
function($, VplView, PageViewModel) {
    return VplView.extend({        
        template: '/templates/page/Form.html',
        viewModel: new PageViewModel,
        initialize: function() {
            var $t = this;

            $(document).one('dispatchComplete', function() {
                $('.contentElement input').on('blur', function() {
                    console.log(this, 'Changed Element');

                    var sectionI    = parseInt($(this).parents('.section').attr('id').replace(/[^0-9]/gi, ''));
                    var section     = $t.viewModel.getCollection('sections').at(sectionI);

                    console.log(section, 'Element Section');

                    var contentId   = parseInt($(this).attr('id').replace(/[^0-9]/gi, ''));
                    var content     = section.get('contents').where({contentId: contentId})[0];

                    console.log(content, 'Element Content');
                    
                    if($(this).val() != content.get('value')) {
                        console.log('Value changed to "%s"', $(this).val());
                        content.set('value', $(this).val());
                    }
                });
            });
        }
    });
});