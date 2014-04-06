define(['jquery', 'global', 'backbone', 'loader',
    'models/FormModel', 'models/TemplateModel'],
function($, Global, Backbone, Loader, FormModel, TemplateModel) {
    return Backbone.Model.extend({
        id: 'new.json',    // @todo [dk] replace with real ID
        urlRoot: '/data',   // @todo [dk] replace with real root
        loader: new Loader,
        defaults: {
            formUrl: null,
            pageUrl: null,

            form: null,
            template: null
        },
        fetch: function() {
            var $t = this;

            var $p = $t.loader.load($t.url());

            $.when($p).then(function(result) {
                $t.set($t.parse(result));
            });

            return $p;
        },
        parse: function(result) {
            var $t = this;

            if(!Global.get('form')) {
                Global.set('form', new FormModel(result.form));
                Global.get('form').set('currentPageUrl', $t.get('pageUrl'));
            }

            if(!Global.get('template')) {
                Global.set('template', new TemplateModel(result.template));
            }

            return {
                form:       Global.get('form'),
                template:   Global.get('template')
            }
        }
    });
});
