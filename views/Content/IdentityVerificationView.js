define(['jquery', 'underscore', 'global', 'views/ContentView'],
function($, _, Global, ContentView) {
    return ContentView.extend({
        templateUrl: 'html/Content/IdentityVerification.html',
        events: {
            'mouseup input[type="button"]': 'appendFrame'
        },
        activeFrame: null,
        beforeLoad: function() {
            var $t = this;

            var displayApplicants = [];

            $t.model.get('applicants').each(function(applicant) {
                if(applicant.get('displayRule').check(Global.get('form'))) {
                    var name = [];

                    _.each(applicant.get('name'), function(contentId) {
                        name.push(Global.get('form').getContents().findWhere({
                            'contentId': contentId
                        }).get('value'));
                    });

                    applicant.set('nameText', name.join(' '));

                    applicant.on('change:verified', function() {
                        applicant.set('valid', true);
                        $t.render();
                    });

                    displayApplicants.push(applicant.toJSON());
                }
            });

            $t.model.set('displayApplicants', displayApplicants);
        },
        appendFrame: function(e) {
            var $t = this;

            if($t.activeFrame) {
                $t.activeFrame.remove();
                $t.activeFrame = null;
            }

            var $p = $t.model.getWindowParams(
                $(e.currentTarget).attr('data-persona'),
                Global.get('form').get('application')
            );

            $.when($p).then(function(data) {
                if(!data) {
                    data = {
                        'status': 'success',
                        'iframe-url': '/id.php',
                        'post-data': {}
                    };
                }

                if(data.status == 'error') {
                    alert(data.message);
                    return;
                }

                $t.activeFrame = $(document.createElement('iframe')).attr({
                    'id': 'iframe' + $(e.currentTarget).attr('data-persona'),
                    'data-persona': $(e.currentTarget).attr('data-persona')
                });

                var dummy = $(document.createElement('form')).attr({
                    action: data['iframe-url'],
                    method: 'post',
                    target: 'iframe' + $(e.currentTarget).attr('data-persona')
                });

                _.each(data['post-data'], function(value, name) {
                    dummy.append($(document.createElement('input')).attr({
                        'type': 'hidden',
                        'name': name,
                        'value': value
                    }));
                });

                $('#persona' + $(e.currentTarget).attr('data-persona'))
                    .append($t.activeFrame);

                dummy.submit();

                $(document).on('verificationError', function() {
                    alert('Verification could not be completed');
                });

                $(document).on('verificationSuccess', function() {
                    $t.model.setVerified($t.activeFrame.attr('data-persona'));
                    $('#persona' + $t.activeFrame.attr('data-persona'))
                        .addClass('valid');

                    $t.activeFrame.remove();
                });
            });
        }
    });
});