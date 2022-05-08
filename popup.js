function popup() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: "fromButton"});
  });
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("romanize").addEventListener("click", popup);
});
