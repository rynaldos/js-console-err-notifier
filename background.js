chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id}, files: ['contentScript.js']
    });
})
