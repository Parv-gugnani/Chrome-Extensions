// background.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "musicInfo") {
    // Process the music information received from the content script
    console.log("Currently playing:", message.data);
    // You can perform further actions with the music information here
  }
});
