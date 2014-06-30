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

            var $q = new Queue;

            var $p = $t.loader.load($t.url());

            $.when($p).then(function(result) {
                $t.set('form', 
                    FormModelFactory.getInstance(result.form));

                $t.set('template', 
                    TemplateModelFactory.getInstance(result.template));
            });

            $q.add($p);

            var app = new ApplicationModel();

            if($t.get('applicationToken')) {
                app.set('applicationToken', $t.get('applicationToken'));
                $q.add(app.fetch());
            }

            $.when($q.promise()).then(function() {
                $t.get('form').set('application', app);
                $t.get('form').set('currentPageUrl', $t.get('pageUrl'));
            });

            return $q.load();
        }
    });
});
