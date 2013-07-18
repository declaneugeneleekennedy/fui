define(['jquery', 'cors'],
function($) {
    return function() {
        return {
            promises: {},
            addPromise: function(url, promise) {
                var $t = this;

                $t.promises[url] = promise;
            },
            getPromise: function(url) {
                var $t = this;

                return $t.promises[url] || undefined;
            },
            load: function(url, dataType, method) {
                var $t = this;

                if(!dataType) {
                    dataType = 'json';
                }

                if(!method) {
                    method = 'get';
                }

                if(!$t.getPromise(url)) {
                    $t.addPromise(url, $.ajax({
                        url: url,
                        dataType: dataType,
                        method: method
                    }));
                }

                return $t.getPromise(url);
            }
        };
    };
});