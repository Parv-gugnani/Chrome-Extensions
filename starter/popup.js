document.addEventListener("DOMContentLoaded", function () {
  const textToRead = document.getElementById("text-to-read");
  const readButton = document.getElementById("read-button");

  readButton.addEventListener("click", function () {
    const text = textToRead.value;

    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  });
});
