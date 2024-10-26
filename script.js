const clockElement = document.getElementById('clock');
const enlargeButton = document.getElementById('enlargeButton');
const shrinkButton = document.getElementById('shrinkButton');
let fontSize = 4; // Initial font size

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  clockElement.textContent = formattedTime;
  clockElement.style.fontSize = `${fontSize}em`;
}

setInterval(updateClock, 1000);

enlargeButton.addEventListener('click', () => {
  fontSize += 0.5;
  if (fontSize > 6) {
    fontSize = 6;
  }
  updateClock();
});

shrinkButton.addEventListener('click', () => {
  fontSize = Math.max(fontSize - 0.5, 2); // Minimum font size is 2
  updateClock();
});
