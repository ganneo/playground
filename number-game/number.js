let min = 1,
  max = 10,
  winningNum = randomNum(),
  guessesLeft = 3;

const input = document.querySelector(".guess-input"),
  submitBtn = document.querySelector("#submit-btn"),
  minElement = document.querySelector(".min"),
  maxElement = document.querySelector(".max"),
  msg = document.querySelector(".msg"),
  guessesLeftElement = document.querySelector(".guesses-left");
guessesLeftElement.textContent = guessesLeft;
minElement.textContent = min;
maxElement.textContent = max;

function randomNum() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function message(message, color) {
  input.style.borderColor = color;
  msg.style.display = "block";
  msg.textContent = message;
  msg.style.color = color;
}

function reload() {
  window.location.reload();
}

function restartGame() {
  input.disabled = true;
  submitBtn.className = "play-again";
  submitBtn.textContent = "PLAY AGAIN";
  submitBtn.removeEventListener("click", winOrLose);
  submitBtn.addEventListener("click", reload);
}

function winOrLose() {
  if (
    isNaN(parseInt(input.value)) ||
    parseInt(input.value) < min ||
    parseInt(input.value) > max
  ) {
    message("Please guess a number between 1 and 10", "red");
    setTimeout(function () {
      input.style.borderColor = "";
      submitBtn.style.borderColor = "";
      msg.style.display = "none";
      input.disabled = false;
    }, 3000);

    return;
  }

  if (parseInt(input.value) === winningNum) {
    restartGame();
    message(`${input.value} was correct. YOU WON! ᕕ( ᐛ )ᕗ`, "green");
    return;
  }

  guessesLeft -= 1;

  if (guessesLeft === 0) {
    restartGame();
    message(
      `${input.value} was incorrect. The number was ${winningNum} :(`,
      "red"
    );
  } else if (guessesLeft === 1) {
    message(
      `${input.value} was incorrect. You have ${guessesLeft} guess left`,
      "red"
    );
  } else {
    message(
      `${input.value} was incorrect. You have ${guessesLeft} guesses left`,
      "red"
    );
  }
}

submitBtn.addEventListener("click", winOrLose);
