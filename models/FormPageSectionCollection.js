define(['vpl/collection'],
function(VplCollection) {
    return VplCollection.extend({
        dataSource: 'form',
        parse: function(result, args) {
            var sections = [];

            $.each(result.form.pages, function()) {
                if(this.pageUrl == args.pageUrl) {
                    $.each(this.sections, function() {
                        sections.push(this);
                    });
                }
            }

            return sections;
        }
    });
});