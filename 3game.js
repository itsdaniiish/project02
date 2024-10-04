let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guess-input');
    const feedback = document.getElementById('feedback');
    const guess = Number(guessInput.value);
    
    attempts++;

    if (guess === randomNumber) {
        feedback.innerText = `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`;
        feedback.style.color = 'green';
    } else if (guess > randomNumber) {
        feedback.innerText = 'Too high! Try again.';
        feedback.style.color = 'red';
    } else if (guess < randomNumber) {
        feedback.innerText = 'Too low! Try again.';
        feedback.style.color = 'red';
    }

    guessInput.value = '';
    guessInput.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').innerText = '';
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').focus();
}
