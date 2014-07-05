define(['jquery', 'backbone', 'loader', 'js/queue',
    'models/FormModelFactory', 'models/TemplateModelFactory',
    'models/ApplicationModel'],
function($, Backbone, Loader, Queue,
    FormModelFactory, TemplateModelFactory,
    ApplicationModel
) {
    return Backbone.Model.extend({
        loader: new Loader,
        urlRoot: dataHost + '/structure',
        defaults: {
            formUrl: null,
            pageUrl: null,

            applicationToken: null,

            form:       null,
            template:   null
        },

        // replaced in order to load up to three models
        fetch: function() {
            var $t = this;

            var $d = $.Deferred();

            $.when($t.loader.load($t.url())).then(function(result) {
                $t.set('form', 
                    FormModelFactory.getInstance(result.form));

                $t.get('form').set('currentPageUrl', $t.get('pageUrl'));

                $t.set('template', 
                    TemplateModelFactory.getInstance(result.template));

                if(!$t.get('form').get('application')) {
                    $t.get('form').set('application', new ApplicationModel);
                }

                if(!$t.get('applicationToken')) {
                    $d.resolve();
                    return;
                }

                $t.get('form').get('application')
                    .set('applicationToken', $t.get('applicationToken'));

                $.when($t.get('form').get('application').fetch()).then(function() {
                    $t.get('form')
                        .setContentsFromApplication(
                            $t.get('form').get('application'));
                        
                    $d.resolve();
                });
            });

            return $d.promise();
        }
    });
});
