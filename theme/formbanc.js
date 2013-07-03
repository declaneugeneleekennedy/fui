define(
[
    // core

    'jquery',
    'loader',
    'text!/data/template.json',

    // UI extensions

    'asset/js/jquery/inputmask',
    'asset/js/jquery/inputmask-ext',
    'asset/js/jquery/inputmask-ext-date',
    'asset/js/jquery/inputmask-ext-numeric'
],
function($, Loader, TemplateJson) {
    var templateData = JSON.parse(TemplateJson);
    console.log(templateData, 'Template Data');

    return function() {
        return {
            id: templateData.templateId,
            config: templateData.templateSettings,
            loader: new Loader,
            cssAdded: false,
            applyTheme: function(view) {
                var $t = this;

                // the view attaches elements on render complete, so events must wait for dispatch
                $(document).on('dispatchComplete', function() {

                    // input masks
                    $('input[data-input-format="9"]').inputmask('+61 (09) 9999 9999'); // landline
                    $('input[data-input-format="10"]').inputmask('+61 (0499) 999 999'); // mobile
                    $('input[data-input-format="12"]').inputmask('999 999 999'); // tfn
                    $('input[data-input-format="13"]').inputmask('99 999 999 999'); // abn
                });

                $t.addStyleTag('/theme/asset/css/default.css');

                view.trigger('themeComplete');
            },
            addStyleTag: function(url) {
                var $t = this;
                if($('head link[href="' + url + '"]').length == 0) {
                    $('head').append($t.getStyleTag(url));
                }
            },
            getStyleTag: function(url) {
                return $(document.createElement('link'))
                    .attr('type', 'text/css')
                    .attr('rel', 'stylesheet')
                    .attr('href', url);
            }
        };
    }
});