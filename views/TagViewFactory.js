define(['jquery', 'underscore', 'views/Tag/PopulateView'],
function($, _, PopulateView) {
    var classes = {
        populate: PopulateView
    };

    return {
        basePattern: /\{formbanc_[^\}]+\}/ig,
        typePattern: /\{formbanc_([a-z]+)\|[^\}]+\}/i,

        getType: function(tag) {
            var $t = this;

            return $t.typePattern.exec(tag)[1] || false;
        },

        replaceTags: function(element) {
            var $t = this;

            var html = element.html();

            _.each(html.match($t.basePattern), function(tag) {
                var type = $t.getType(tag);

                if(type && classes[type]) {
                    element.find(':contains(' + tag + ')').contents().filter(function() {
                        return (this.nodeType == 3 && $(this).text().indexOf(tag) != -1);
                    }).each(function() {
                        var $c = $(this).parent();

                        // create temporary dom element so that the view element can be replaced as a string
                        $c.html($c.text().replace(tag, $(document.createElement('span'))
                            .append(new classes[type]({ tag: tag }).el).html()));
                    });
                }
            });
        }
    };
});