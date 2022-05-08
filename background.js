chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: 'selectionGetter',
    title: 'Romanize Hanzi',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: "fromMenu", data: info.selectionText});
  });
  
  return true;
});