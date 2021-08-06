// selector 为对话框的 CSS 选择器或 DOM 元素或 HTML 字符串
// options 为配置参数，见下面的参数列表
var inst = new mdui.Dialog('#addBookmarkDialog', {
    modal: true
});

// method
document.getElementById('addBookmark').addEventListener('click', function () {
    inst.open();
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