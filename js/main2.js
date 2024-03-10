const countdownElement = document.getElementById('countdown');
const joinButton = document.getElementById('join-button');
const messageElement = document.getElementById('message');

let secondsRemaining = 60;

const timer = setInterval(() => {
  secondsRemaining--;
  countdownElement.textContent = `00:${secondsRemaining.toString().padStart(2, '0')}`;

  if (secondsRemaining === 0) {
    clearInterval(timer);
    joinButton.classList.add('disabled');
    joinButton.textContent = 'Offer Expired';
    messageElement.textContent = 'The free join offer has ended.';
  }
}, 1000); // Update timer every second