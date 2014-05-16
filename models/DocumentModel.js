define(['jquery', 'backbone', 'loader',
    'models/FormModelFactory', 'models/TemplateModelFactory'],
function($, Backbone, Loader,
    FormModelFactory, TemplateModelFactory
) {
    return Backbone.Model.extend({
        id: 'static.json',    // @todo [dk] replace with real ID
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

                $t.get('form').set('currentPageUrl', $t.get('pageUrl'));
            });

            return $p;
        },
        parse: function(result) {
            var $t = this;

            return {
                form:       FormModelFactory.getInstance(result.form),
                template:   TemplateModelFactory.getInstance(result.template)
            }
        }
    });
});
