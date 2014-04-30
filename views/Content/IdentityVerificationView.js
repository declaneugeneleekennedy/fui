define(['underscore', 'global', 'views/ContentView'],
function(_, Global, ContentView) {
    return ContentView.extend({
        templateUrl: 'html/Content/IdentityVerification.html',
        events: {
            'blur input': 'update'
        },
        beforeLoad: function() {
            var $t = this;

            $t.model.get('applicants').each(function(applicant) {
                if(applicant.get('displayRule').check(Global.get('form'))) {
                    var name = [];

                    _.each(applicant.get('name'), function(contentId) {
                        name.push(Global.get('form').getContents().findWhere({
                            'contentId': contentId
                        }).get('value'));
                    });

                    applicant.set('nameText', name.join(' '));
                }
            });

            $t.model.set('applicants', $t.model.get('applicants').toJSON());
        }
    });
});