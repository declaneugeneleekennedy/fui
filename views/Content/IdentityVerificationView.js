define(['jquery', 'underscore', 'views/ContentView',
    'models/FormModelFactory'],
function($, _, ContentView,
    FormModelFactory
) {
    return ContentView.extend({
        templateUrl: 'html/Content/IdentityVerification.html',
        events: {
            'click button': 'appendFrame'
        },
        activeFrame: null,
        beforeLoad: function() {
            var $t = this;

            var displayApplicants = [],
                $form = FormModelFactory.getInstance();

            $t.model.get('applicants').each(function(applicant) {
                if(applicant.get('displayRule').check($form)) {
                    var name = [], applicantJSON = {};

                    _.each(applicant.get('name'), function(contentId) {
                        name.push($form.getContents().findWhere({
                            'contentId': contentId
                        }).get('value'));
                    });

                    applicantJSON.nameText  = name.join(' ');
                    applicantJSON.persona   = applicant.get('persona');

                    applicant.on('change:verified', function() {
                        $form.get('currentPage').validate();
                    });

                    displayApplicants.push(applicantJSON);
                }
            });

            

            $t.model.set('displayApplicants', displayApplicants);
        },
        appendFrame: function(e) {
            var $t = this;

            e.preventDefault();

            if($t.activeFrame) {
                $t.activeFrame.remove();
                $t.activeFrame = null;
            }

            var $p = $t.model.getWindowParams(
                $(e.currentTarget).attr('data-persona'),
                FormModelFactory.getInstance().get('application')
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
                    'name': 'iframe' + $(e.currentTarget).attr('data-persona'),
                    'data-persona': $(e.currentTarget).attr('data-persona')
                });

                // data must be posted, so create an invisible form
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
                    .addClass('active')
                    .append($t.activeFrame);

                $('#persona' + $t.activeFrame.attr('data-persona') +
                    ' button span.text').text('In Progress');

                dummy.submit();

                $(document).on('verificationError', function() {
                    $('#persona' + $t.activeFrame.attr('data-persona'))
                        .removeClass('active');

                    $('#persona' + $t.activeFrame.attr('data-persona') +
                        ' button span.text').text('Verify');

                    alert('Verification could not be completed');
                });

                $(document).on('verificationSuccess', function() {
                    $t.model.setVerified($t.activeFrame.attr('data-persona'));
                    
                    $('#persona' + $t.activeFrame.attr('data-persona'))
                        .removeClass('active')
                        .addClass('valid');

                    $('#persona' + $t.activeFrame.attr('data-persona') +
                        ' button span.text').text('Completed');

                    $('#persona' + $t.activeFrame.attr('data-persona') + ' button')
                        .prop('disabled', true);

                    $('input[name="' + $t.model.get('name') +
                        '[' + $t.activeFrame.attr('data-persona') + ']"]').val(1);

                    $t.activeFrame.remove();
                });
            });
        }
    });
});