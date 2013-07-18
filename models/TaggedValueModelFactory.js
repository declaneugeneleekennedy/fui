define(['underscore', 'models/TaggedValueModel'],
function(_, TaggedValueModel) {
    return {
        getInstances: function(model, property) {
            var $t = this;

            var instances = [];

            var rawTags = model.get(property).match(/\{[^\}]+\}/gi);

            if(rawTags) {
                _.each(rawTags, function(rawTag) {
                    var parts = rawTag.replace(/[\{\}]/gi, '').split('|');

                    instances.push(new TaggedValueModel({
                        model: model,
                        property: property,                        
                        rawTag: rawTag,
                        triggerContentId: parseInt(parts[1]),
                        defaultValue: parts[2],
                        startingValue: model.get(property)
                    }));
                });
            }

            return instances;
        }
    };
});