function fixedCodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

$('#submit').click(function () {

    if ($('#text').val()) {
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedCodeURI($('#text').val());

        var createData = {
            "url": wikiUrl,
            // "type": "panel",
            // "top": 5,
            // "left": 5,
            // "width": screen.availWidth / 2,
            // "height": screen.availHeight / 2
        };

        chrome.tabs.create(createData, function () {
            console.log("Successfully searched");
        });
    }
});