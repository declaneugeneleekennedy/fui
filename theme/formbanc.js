define(
['jquery', 'loader', 'text!/data/template.json'],
function($, Loader, TemplateJson) {
    var templateData = JSON.parse(TemplateJson);
    console.log(templateData, 'Template Data');

    return function() {
        return {
            id: templateData.templateId,
            config: templateData.templateSettings,
            loader: new Loader,
            addCss: function() {
                console.log('Theme.addCss called');
            }
        };
    }
});