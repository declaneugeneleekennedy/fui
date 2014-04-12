define(['views/ContentView'],
function(ContentView) {
    return ContentView.extend({
        templateUrl: 'html/Content/MultilineInputBox.html',
        events: {
            'blur input': 'setValue'
        }
    });
});