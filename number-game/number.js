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

function playAgain() {
  document.location.reload();
}

function message(message, color) {
  input.style.borderColor = color;
  msg.style.display = "block";
  msg.textContent = message;
  msg.style.color = color;
  input.disabled = true;
}

function winOrLose() {
  if (parseInt(input.value) === winningNum) {
    message(`${input.value} was correct. YOU WON! ᕕ( ᐛ )ᕗ`, "green");
    submitBtn.className = "play-again";
    submitBtn.textContent = "PLAY AGAIN";
    submitBtn.addEventListener("mousedown", playAgain);
  } else {
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
    } else {
      guessesLeft -= 1;
      if (guessesLeft === 0) {
        submitBtn.className = "play-again";
        submitBtn.textContent = "PLAY AGAIN";
        submitBtn.addEventListener("mousedown", playAgain);
        message(
          `${input.value} was incorrect. The number was ${winningNum} :(`,
          "red"
        );
      } else {
        input.style.borderColor = "red";
        if (guessesLeft === 1) {
          msg.style.display = "block";
          msg.textContent = `${input.value} was incorrect. You have ${guessesLeft} guess left`;
          input.style.disabled = false;
        } else {
          msg.style.display = "block";
          msg.textContent = `${input.value} was incorrect. You have ${guessesLeft} guesses left`;
          input.style.disabled = false;
        }
        msg.style.color = "red";
      }
    }
  }
}

submitBtn.addEventListener("click", winOrLose);
