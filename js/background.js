function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

chrome.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);

function notify () {
  chrome.notifications.create({
    "type": "basic",
    "iconUrl": chrome.extension.getURL("images/icon.png"),
    "title": "通知",
    "message": "插件已刷新"
  });
}

setTimeout(function () {
  notify()
}, 3000)

chrome.notifications.onClicked.addListener(function () {
  console.log('----------asd----------------')
});
