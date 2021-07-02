var menuItem = {
    "id": "wikit",
    "title": "Search in wiki",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedCodeURI(str){
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "wikit" && clickData.selectionText){
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedCodeURI(clickData.selectionText);
        const createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": (screen.availWidth)/2,
            "height": (screen.availHeight)/2
        };

        chrome.windows.create(createData, function(){
            console.log("Successfully searched");
        });
    }
});