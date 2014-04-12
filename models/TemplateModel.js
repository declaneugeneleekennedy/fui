define(['jquery', 'underscore', 'backbone', 'loader', 'global',
    'models/ColourModel'],
function($, _, Backbone, Loader, Global, ColourModel) {
    return Backbone.Model.extend({
        loader: new Loader,
        queue: {},
        defaults: {
            templateId: null,
            colour: {},
            sprite: null,
            headerBackgroundImage: null,
            headerImage: null,
            formTitleImage: null,
            formContactType: null,
            formContactContent: null,
            radius: null,
            headingsFontFamily: null,
            fontFamily: null,
            fontSize: null,
            enable3d: null,
            btnLabelPrevious: null,
            btnLabelNext: null,
            btnLabelSave: null,
            btnLabelSaveSub: null,
            btnLabelPrint: null,
            btnLabelPrintSub: null,
            btnLabelComplete: null,
            bulletPointUnicodeCharacter: null
        },
        initialize: function() {
            var $t = this;

            _.each($t.get('templateSettings'), function(value, name) {
                $t.set(name, value);
            });

            $t.unset('templateSettings');

            $t.set('colour', new ColourModel($t.get('colour')));
        },
        getFile: function(url, dataType) {
            var $t = this;

            return $t.loader.load(url, dataType);
        },
        getHtmlFile: function(fileName) {
            var $t = this;

            return $t.getFile($t.getFileUrl(fileName), 'html');
        },
        getBaseUrl: function() {
            var $t = this;

            return Global.get('clientHost') + '/templates/'
                + String('000' + $t.get('templateId')).slice(-3) + '/';
        },
        getFileUrl: function(fileName) {
            var $t = this;

            if(!fileName) {
                fileName = '';
            }

            if(fileName.charAt(0) == '/') {
                fileName = fileName.substr(1);
            }

            return $t.getBaseUrl() + fileName;
        },
        getSettingUrl: function(setting) {
            var $t = this;

            return $t.getFileUrl($t.get(setting));
        },
        getColour: function(name) {
            var $t = this;

            return $t.get('colour').get(name);
        }
    });
});
