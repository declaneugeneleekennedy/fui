define(['backbone'],
function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            'default': null,
            'alternative': null,
            'light': null,
            'dark': null
        },
        get: function(attribute) {
            var $t = this;

            if(attribute) {
                return Backbone.Model.prototype.get.call($t, attribute);
            }

            return $t.get('default');
        },
        toString: function() {
            var $t = this;

            return $t.get('default');
        },
        getGradientCss: function(from, to) {
            var $t = this;

            if(!to) {
                to = 'default';
            }

            var hexF = $t.get(from),
                hexT = $t.get(to);

            return {
                'background-color': hexF,
                'background-image': '-ms-linear-gradient(top, ' + hexF + ' 0%, ' + hexT + ' 100%)',
                'background-image': '-moz-linear-gradient(top, ' + hexF + ' 0%, ' + hexT + ' 100%)',
                'background-image': '-o-linear-gradient(top, ' + hexF + '0%, ' + hexT + ' 100%)',
                'background-image': '-webkit-gradient(linear, left top, left bottom, color-stop(0, ' + hexT + '), color-stop(1, ' + hexT + '))',
                'background-image': '-webkit-linear-gradient(top, ' + hexF + ' 0%, ' + hexT + ' 100%)',
                'background-image': 'linear-gradient(to bottom, ' + hexF + ' 0%, ' + hexT + ' 100%)',
                'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=\'' + hexF + '\', endColorstr=\'' + hexT + '\', GradientType=0)'
            };
        }
    });
});
