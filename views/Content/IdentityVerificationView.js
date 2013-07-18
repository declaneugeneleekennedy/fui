define(['views/ContentView'],
function(ContentView) {
    return ContentView.extend({
        templateUrl: 'Content/IdentityVerification.html',
        events: {
            'blur input': 'update'
        }
    });
});