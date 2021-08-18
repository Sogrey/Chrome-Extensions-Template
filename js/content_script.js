$(document).ready(function () {
    var html = document.documentElement && document.documentElement.innerHTML;
    var head = document.head && document.head.innerHTML;
    var body = document.body && document.body.innerHTML;
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            console.log('request => ',request);
            switch (request.cmd) {
                case "getTabHtml":
                    sendResponse(html);
                    break;
                case "getTabHead":
                    sendResponse(head);
                    break;
                case "getTabBody":
                    sendResponse(body);
                    break;
                default:
                    sendResponse("FUCK OFF"); // snub them.
                    break;
            }
        });
});