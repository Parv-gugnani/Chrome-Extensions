// // popup.js

// // Function to fetch music information from the background script
// function fetchMusicInfo() {
//   // Send a message to the background script to request music information
//   chrome.runtime.sendMessage({ action: "getMusicInfo" }, function (response) {
//     // Handle the response received from the background script
//     if (response && response.success) {
//       // Display the music information in the popup
//       document.getElementById(
//         "music-info"
//       ).textContent = `Currently playing: ${response.data.title} by ${response.data.artist}`;
//     } else {
//       // Display an error message if unable to fetch music information
//       //   document.getElementById("music-info").textContent =
//       //     "Unable to fetch music information";
//     }
//   });
// }

// // This function will be called when the popup HTML has finished loading
// document.addEventListener("DOMContentLoaded", function () {
//   // Fetch music information when the popup is opened
//   fetchMusicInfo();
// });

console.log("Hello  world!");
