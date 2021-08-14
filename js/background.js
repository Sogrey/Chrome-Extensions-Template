/**
 * 插件安装后、开启时的监听回调
 */
chrome.runtime.onInstalled.addListener(() => {
    console.log('Hello,Chrome插件已安装。');
});

/**
 * 仅获取当前选项卡ID
 * @param {*} callback 
 */
function getCurrentTabId(callback) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        if (callback) callback(tabs.length ? tabs[0].id : null);
    });
}

/**
 * 获取当前tab信息，页面标题、地址、ico图标地址等
 * @param {*} callback 
 */
function getSelectedTabTitle(callback) {
    chrome.tabs.getSelected(null, function (tab) { // 先获取当前页面的tabID     
        // alert(tab.title + '\n' + tab.url);
        // console.log(tab);
    
        // title = tab.title;
        // url = tab.url;
        // favIconUrl = tab.favIconUrl;

        // tab.id  tabID
        // tab.index 页面序号第几个，从0开始

        if(callback) callback(tab);
    
    });
}

/**
 * 与当前tab页面进行通信
 * @param {*} message 消息体
 * @param {*} callback 回应
 * @param {*} tabId tabID,可选，缺省则默认当前激活的tab
 */
function sendMessageToContentScript(message, callback, tabId) {
    if (!tabId) {
        getCurrentTabId((id) => {
            chrome.tabs.sendMessage(id, message, function (response) {
                if (callback) callback(response);
            });
        });
    } else {
        chrome.tabs.sendMessage(tabId, message, function (response) {
            if (callback) callback(response);
        });
    }
}


// var contextMenuItem = {
//     id: "selectText",
//     title: "选择文本[通知]",
//     contexts: ["selection"]
// };

// chrome.contextMenus.create(contextMenuItem);

// chrome.contextMenus.onClicked.addListener(function (params) {
//     if (params.menuItemId == "selectText" && params.selectionText) {
//         var notificationOptions = {
//             type: 'basic',
//             iconUrl: "imgs/icons/Sogrey.png",
//             title: 'selectText',
//             message: params.selectionText
//         };
//         chrome.notifications.create('selectText', notificationOptions);
//     }
// });

// chrome.storage.onChanged.addListener(function (changes,storageName) {
//     // chrome.browserAction.setBadgeText({
//     //     text:'1024'
//     // });
// });

// chrome.browserAction.setBadgeText({
//     text:'1024'
// });



// var html = document.body.innerHTML;
// chrome.extension.onMessage.addListener(
//     function (request, sender, sendMessage) {
//         if (request.greeting == "getTabHtml")
//             sendMessage(html);
//         else
//             sendMessage("FUCK OFF"); // snub them.
//     });