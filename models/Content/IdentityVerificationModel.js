define(['underscore', 'models/ContentModel',
    'models/ApplicantCollection', 'models/DisplayRuleCollection'],
function(_, ContentModel,
    ApplicantCollection, DisplayRuleCollection) {
    return ContentModel.extend({
        defaults: _.defaults({
            applicants: [],
            individualVerificationPageMsg: null,
            summaryPageDocMsg: null,
            summaryPageIntroMsg: null
        }, ContentModel.prototype.defaults),

        setExtendedAttributes: function() {
            var $t = this;

            $t.set('applicants', new ApplicantCollection($t.get('applicants')));

            var rules = new DisplayRuleCollection;

            if($t.get('displayRule')) {
                rules.add($t.get('displayRule'));
            }

            $t.get('applicants').each(function(applicant) {
                if(applicant.get('displayRule')) {
                    rules.add(applicant.get('displayRule'));
                }
            });

            $t.set('displayRule', rules);
        }
    });
});