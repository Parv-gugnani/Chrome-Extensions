// content.js

// Function to extract music information from the webpage
function extractMusicInfo() {
  // Add your code here to extract information about the currently playing music
  // For example, you can look for HTML elements that contain information about the music
  // and extract relevant data such as song title, artist, album, etc.
  // Return the extracted music information as an object
  return {
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
  };
}

// Send the music information to the background script
chrome.runtime.sendMessage({ action: "musicInfo", data: extractMusicInfo() });
