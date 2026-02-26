// Store collected digits
let code = [];

// Correct final code
const correctCode = "3612";

// Book click handler
document.querySelectorAll(".book").forEach(book => {
  book.addEventListener("click", function() {

    const bookNumber = this.dataset.book;

    // Puzzle logic per book
    if (bookNumber === "2") {
      alert("Count only complete frames.");
      addDigit(3);
    }

    else if (bookNumber === "5") {
      alert("Count only independent symbols.");
      addDigit(6);
    }

    else if (bookNumber === "6") {
      alert("Count only what is different.");
      addDigit(1);
    }

    else if (bookNumber === "3") {
      alert("Count only what lies in the center.");
      addDigit(2);
    }

    else {
      alert("Nothing useful here.");
    }

  });
});

// Add digit to array
function addDigit(digit) {
  if (code.length < 4) {
    code.push(digit);
    alert("Digit collected: " + digit);
  } else {
    alert("You already have 4 digits!");
  }
}

// Check lock
function checkCode() {
  const userInput = document.getElementById("lockInput").value;

  if (userInput === correctCode) {
    document.getElementById("result").textContent = "Unlocked! You solved the mystery! 🚂";
  } else {
    document.getElementById("result").textContent = "Wrong code. Try again.";
  }
}