var notificationOptions = {
    type: 'basic',
    iconUrl: "imgs/icons/Sogrey.png",
    title: 'Notification demo',
    message: 'This is a notification demo!'
};
chrome.notifications.create('Notification', notificationOptions);