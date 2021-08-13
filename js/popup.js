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


// -------------------------

var qr = new QRious({
    element: document.getElementById('qr'),
    value: 'https://github.com/neocotic/qrious'
});

var showQRDialog = new mdui.Dialog('#showQR', {
    modal: true
});

// method
document.getElementById('showQRMenu').addEventListener('click', function () {
    showQRDialog.open();
});

// // event
// var dialog = document.getElementById('showQR');

// dialog.addEventListener('open.mdui.dialog', function () {
//     console.log('open');
// });

// dialog.addEventListener('opened.mdui.dialog', function () {
//     console.log('opened');
// });

// dialog.addEventListener('close.mdui.dialog', function () {
//     console.log('close');
// });

// dialog.addEventListener('closed.mdui.dialog', function () {
//     console.log('closed');
// });

// dialog.addEventListener('cancel.mdui.dialog', function () {
//     console.log('cancel');
// });

// dialog.addEventListener('confirm.mdui.dialog', function () {
//     console.log('confirm');
// });

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