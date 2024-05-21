
//List Define
const words = ["renu", "keshu", "abhi", "mamma", "rajat", "webdev", "laptop", "mohali", "mandal", "screen", "rose", "nandu", "legal", "komal", "madhu", "anish", "kriti", "suman", "himani", "phone"];
let currentWord, guessesLeft, score;

// Get username and display it
const username = prompt("Enter your name:");
document.getElementById("username").textContent = username;

// Start new game
function startGame() {
  guessesLeft = 3;
  score = 0;
  currentWord = words[Math.floor(Math.random() * words.length)];
  const jumbledChars = currentWord.split("").sort(() => Math.random() - 0.5).join("");
  document.getElementById("jumbled-word").textContent = jumbledChars;
  document.getElementById("guess").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("submit-guess").disabled = false;
  document.getElementById("play-again").disabled = true;
}

startGame();

// Handle guess submission
document.getElementById("submit-guess").addEventListener("click", function () {
  const guess = document.getElementById("guess").value.toLowerCase();
  if (guess === currentWord) {
    let marks = 100;
    let emoji = "⭐";
    if (guessesLeft === 2) {
      marks = 70;
      emoji = "😃";
    } else if (guessesLeft === 1) {
      marks = 40;
      emoji = "😁";
    }
    guessesLeft--;
    score += marks;
    document.getElementById("result").textContent = `Correct Your score is${marks} ${emoji}`;
    document.getElementById("score-value").textContent = score;
    document.getElementById("submit-guess").disabled = true;
    if (guessesLeft === 0) {
      document.getElementById("play-again").disabled = false;
    }
  } else {
    guessesLeft--;
    document.getElementById("result").textContent = `Wrong! ${guessesLeft} attempts left.`;
    if (guessesLeft === 0) {
      document.getElementById("result").textContent = `Game Over! `;
      document.getElementById("submit-guess").disabled = true;
      document.getElementById("play-again").disabled = false;
    }
  }
});

// Play again button
document.getElementById("play-again").addEventListener("click", startGame);