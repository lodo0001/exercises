let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

document.querySelector("button").addEventListener("click", function () {
  const userGuess = Number(document.getElementById("userGuess").value);
  const messageDiv = document.getElementById("message");

  attempts++;

  if (attempts > maxAttempts) {
    messageDiv.textContent = `Sorry, you have used all your attempts. The number was ${randomNumber}.`;
    return;
  }

  if (userGuess === randomNumber) {
    messageDiv.textContent = `Congratulations! You guessed the right number: ${randomNumber} in ${attempts} attempts!`;
  } else if (userGuess < randomNumber) {
    messageDiv.textContent = `You guessed too low! You have ${
      maxAttempts - attempts
    } attempts left.`;
  } else {
    messageDiv.textContent = `You guessed too high! You have ${
      maxAttempts - attempts
    } attempts left.`;
  }
});
