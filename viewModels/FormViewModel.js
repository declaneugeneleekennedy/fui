define(
['vpl/viewModel', 'models/FormModel'],
function(VplViewModel, FormModel) {
    return VplViewModel.extend({
        models: {form: new FormModel}
    });
});