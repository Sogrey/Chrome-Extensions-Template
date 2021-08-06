// 插件安装后、开启时的监听回调
chrome.runtime.onInstalled.addListener(() => {
    alert('Hello,Chrome插件已安装。');
});

var contextMenuItem = {
    id: "selectText",
    title: "选择文本[通知]",
    contexts: ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (params) {
    if (params.menuItemId == "selectText" && params.selectionText) {
        var notificationOptions = {
            type: 'basic',
            iconUrl: "imgs/icons/Sogrey.png",
            title: 'selectText',
            message: params.selectionText
        };
        chrome.notifications.create('selectText', notificationOptions);
    }
});

chrome.storage.onChanged.addListener(function (changes,storageName) {
    // chrome.browserAction.setBadgeText({
    //     text:'1024'
    // });
});

// chrome.browserAction.setBadgeText({
//     text:'1024'
// });