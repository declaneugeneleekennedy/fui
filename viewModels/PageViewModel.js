define(
['vpl/viewModel', 'models/FormModel', 'models/PageModel'],
function(VplViewModel, FormModel, PageModel) {
    return VplViewModel.extend({
        models: {form: new FormModel, page: new PageModel},
        initialize: function() {
            var $t = this;

            $t.bind('fetchComplete', function() {
                $t.addCollection('sections', $t.getModel('page').get('sections'));
            });
        }
    });
});