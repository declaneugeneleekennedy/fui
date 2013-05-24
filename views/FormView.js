define(['vpl/view', 'viewModels/FormViewModel'],
function(VplView, FormViewModel) {
    return VplView.extend({
        template: '/templates/Form.html',
        viewModel: new FormViewModel,
        initialize: function(args) {
            var $t = this;
            
            $t.viewModel.bind('fetchComplete', function() {
                var destination =
                    args.formUrl + '/' +
                    $t.viewModel.getModel('form')
                        .get('pages').at(0)
                        .get('pageUrl');

                console.log('Going to first page of form: %s', destination);

                $t.goTo(destination);
            });
        }
    });
});