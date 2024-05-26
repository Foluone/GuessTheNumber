// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = document.getElementById('guessInput').value;
  const message = document.getElementById('message');

  // Clear any previous message
  message.textContent = '';

  // Check if input is a valid number
  if (isNaN(guess)) {
    message.textContent = 'Please enter a valid number.';
    return;
  }

  // Convert guess to a number
  const guessNumber = parseInt(guess);

  // Check if guess is within range
  if (guessNumber < 1 || guessNumber > 100) {
    message.textContent = 'Guess must be between 1 and 100.';
    return;
  }

  // Check if guess is correct
  if (guessNumber === randomNumber) {
    message.textContent = 'Congratulations! You guessed the number!';
    // Optionally, disable guess input and button here
  } else if (guessNumber > randomNumber) {
    message.textContent = 'Too high! Guess lower.';
  } else {
    message.textContent = 'Too low! Guess higher.';
  }
}
