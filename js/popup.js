var title /**页面标题 */ , url /**页面地址 */ , tabId /**当前TabID */ , favIconUrl /**当前页面图标logo */ ;
// backgroud.js
var bgjs = chrome.extension.getBackgroundPage();

//--------------------------------------
// 当前页面Element
//--------------------------------------

var titleInput = document.getElementById('input-addBookmarkDialog-title');
var linkInput = document.getElementById('input-addBookmarkDialog-link');
var iconImage = document.getElementById('img-addBookmarkDialog-icon');

//--------------------------------------
// 查询当前页面信息
//--------------------------------------
bgjs.getSelectedTabTitle((tab) => {
    console.log('tab', tab);

    title = tab.title;
    url = tab.url;
    favIconUrl = tab.favIconUrl;
    tabId = tab.id;

    titleInput.value = title;
    linkInput.value = url;
    if (favIconUrl)
        iconImage.src = favIconUrl;

});

// bgjs.sendMessageToContentScript({
//     cmd: 'getTabHtml',
//     data: {},
// }, (html) => {
//     if (html) alert('收到来自content-script的回复：' + html);
// }, tabId);

// bgjs.sendMessageToContentScript({
//     cmd: 'getTabHead',
//     data: {},
// }, (head) => {
//     if (head) alert('收到来自content-script的回复：' + head);
// }, tabId);

// bgjs.sendMessageToContentScript({
//     cmd: 'getTabBody',
//     data: {},
// }, (body) => {
//     if (body) alert('收到来自content-script的回复：' + body);
// }, tabId);

//--------------------------------------
// 添加书签对话框
//--------------------------------------

// selector 为对话框的 CSS 选择器或 DOM 元素或 HTML 字符串
// options 为配置参数，见下面的参数列表
var addBookmarkDialog = new mdui.Dialog('#addBookmarkDialog', {
    modal: true
});

// method
document.getElementById('addBookmark').addEventListener('click', function () {
    addBookmarkDialog.open();
});

// event
var dialog = document.getElementById('addBookmarkDialog');

dialog.addEventListener('open.mdui.dialog', function () {
    console.log('open');
});

dialog.addEventListener('opened.mdui.dialog', function () {
    console.log('opened');
});

dialog.addEventListener('close.mdui.dialog', function () {
    console.log('close');
});

dialog.addEventListener('closed.mdui.dialog', function () {
    console.log('closed');
});

dialog.addEventListener('cancel.mdui.dialog', function () {
    console.log('cancel');
});

dialog.addEventListener('confirm.mdui.dialog', function () {
    console.log('confirm');
});

//--------------------------------------
// 更多菜单
//--------------------------------------
// anchorSelector 表示触发菜单的元素的 CSS 选择器或 DOM 元素
// menuSelector 表示菜单的 CSS 选择器或 DOM 元素
// options 表示组件的配置参数，见下面的参数列表
var addBookmarkMenu = new mdui.Menu('#addBookmarkMenuBtn', '#addBookmarkMenu', {});

document.getElementById('addBookmarkMenuBtn').addEventListener('click', function () {
    addBookmarkMenu.open();
});

// event
var dialog = document.getElementById('addBookmarkMenu');

dialog.addEventListener('open.mdui.menu', function () {
    console.log('open');
});

dialog.addEventListener('opened.mdui.menu', function () {
    console.log('opened');
});

dialog.addEventListener('close.mdui.menu', function () {
    console.log('close');
});

dialog.addEventListener('closed.mdui.menu', function () {
    console.log('closed');
});

//--------------------------------------
// 手机访问二维码对话框
//--------------------------------------
var showQRDialog = new mdui.Dialog('#showQR', {
    modal: true
});

document.getElementById('showQRMenu').addEventListener('click', function () {
    var qr = new QRious({
        element: document.getElementById('qr'),
        size: 500,
        padding: 0,
        value: url
    });
    var qrUrlEle = document.getElementById('qr_url');
    qrUrlEle.innerText = url;
    showQRDialog.open();
});

//--------------------------------------
// 选项菜单
//--------------------------------------
var optionsUrl = chrome.extension.getURL("options.html");
var settingsMenu = document.querySelector('#settingsMenu>a');
settingsMenu.href = optionsUrl;