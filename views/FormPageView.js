define(
['vpl/view', 'viewModels/FormPageViewModel'],
function(VplView, FormPageViewModel) {
    return VplView.extend({
        template: '/templates/Form.html',
        viewModel: new FormPageViewModel
    });
});