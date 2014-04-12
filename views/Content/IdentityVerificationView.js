define(['views/ContentView'],
function(ContentView) {
    return ContentView.extend({
        templateUrl: 'html/Content/IdentityVerification.html',
        events: {
            'blur input': 'update'
        }
    });
});