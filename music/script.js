const socket = io();

const musicDisplay = document.getElementById("musicDisplay");
const musicInput = document.getElementById("musicInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", () => {
  const musicText = musicInput.value;
  if (musicText.trim() !== "") {
    socket.emit("musicText", musicText);
  }
});

socket.on("musicText", (musicText) => {
  musicDisplay.innerText = musicText;
  animateText();
});

function animateText() {
  // Add animation logic here
}
