const backArrow = document.getElementById("backArrow");

if (backArrow) {
    backArrow.addEventListener("click", () => {
        window.location.href = "mainRoom.html";
    });
}

let currentStep = 0;
const expectedSequence = [2, 5, 6, 3];
let collectedCode = [];

const puzzleData = {
    2: {
        img: "../pictures/open_book2.jpeg",
        hint: "The owl guards wisdom. Count only complete frames.",
        digit: 3
    },
    5: {
        img: "../pictures/open_book5.jpeg",
        hint: "The past loved decorations. Count only independent symbols.",
        digit: 6
    },
    6: {
        img: "../pictures/open_book6.jpeg",
        hint: "What does not match the others must be counted.",
        digit: 1
    },
    3: {
        img: "../pictures/open_book3.jpeg",
        hint: "Not the beginning, not the end. Only what is in the center.",
        digit: 2
    }
};

function checkStar(bookNum) {
    const expectedBook = expectedSequence[currentStep];

    if (bookNum === expectedBook) {
        openPuzzle(bookNum);
    } else {
        alert("Nothing interesting here right now...");
    }
}

function openPuzzle(num) {
    const modal = document.getElementById("puzzleModal");
    const pimg = document.getElementById("puzzleImage");
    const hText = document.getElementById("hintText");

    pimg.src = puzzleData[num].img;
    hText.innerText = puzzleData[num].hint;
    hText.classList.add("hidden");
    modal.style.display = "block";

    if (collectedCode.length === currentStep) {
        collectedCode.push(puzzleData[num].digit);
        console.log("Collected digits: " + collectedCode.join(""));
    }
}

function closePuzzle() {
    document.getElementById("puzzleModal").style.display = "none";
    currentStep++;

    if (currentStep === expectedSequence.length) {
        alert("You collected all the clues! Now try to unlock the lock.");
    }
}

function showHint() {
    document.getElementById("hintText").classList.toggle("hidden");
}