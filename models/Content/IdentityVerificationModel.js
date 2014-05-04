define(['jquery', 'underscore', 'loader', 'models/ContentModel',
    'models/ApplicantCollection', 'models/DisplayRuleCollection'],
function($, _, Loader, ContentModel,
    ApplicantCollection, DisplayRuleCollection) {
    return ContentModel.extend({
        loader: new Loader,
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
        },

        getWindowParams: function(personaNum, application) {
            var $t = this;

            // @todo dk: this doesn't do anything right now

            var $d = $.Deferred();

            var $p = $d.promise();

            $d.resolve();

            return $p;
        },

        getApplicant: function(personaNum) {
            var $t = this;

            return $t.get('applicants').findWhere({
                persona: parseInt(personaNum)
            });
        },

        setVerified: function(personaNum) {
            var $t = this;

            var applicant = $t.getApplicant(personaNum);

            if(!applicant) {
                throw 'Applicant persona ' + personaNum + ' not found';
            }

            applicant.set('verified', true);
        },

        getVerified: function(personaNum) {
            var $t = this;

            var applicant = $t.getApplicant(personaNum);

            if(applicant) {
                return applicant.get('verified');
            }

            return null;

        }
    });
});