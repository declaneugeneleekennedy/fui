define(['views/ContentView'],
function(ContentView) {
    return ContentView.extend({
        templateUrl: 'Content/MultilineInputBox.html',
        events: {
            'blur input': 'setValue'
        }
    });
});