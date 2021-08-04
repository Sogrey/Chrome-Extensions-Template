// 插件安装后、开启时的监听回调
chrome.runtime.onInstalled.addListener(() => {
    alert('Hello, World!插件已安装。');
});

var contextMenuItem = {
    id: "selectText",
    title: "选择文本[alert]",
    contexts: ["selection"]
};

var contextMenuItem2 = {
    id: "selectText2",
    title: "选择文本[通知]",
    contexts: ["selection"]
};

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.create(contextMenuItem2);

chrome.contextMenus.onClicked.addListener(function (params) {
    if (params.menuItemId == "selectText" && params.selectionText) {
        alert(params.selectionText);
    } else if (params.menuItemId == "selectText2" && params.selectionText) {
        var notificationOptions = {
            type: 'basic',
            iconUrl: "imgs/icons/Sogrey.png",
            title: 'selectText2',
            message: params.selectionText
        };
        chrome.notifications.create('selectText2', notificationOptions);
    }
});

chrome.storage.onChanged.addListener(function (changes,storageName) {
    // chrome.browserAction.setBadgeText({
    //     text:'1024'
    // });
});

chrome.browserAction.setBadgeText({
    text:'1024'
});