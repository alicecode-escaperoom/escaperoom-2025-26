// Room 11 code
const backArrow = document.getElementById("backArrow");

backArrow.addEventListener("click", () => {
    window.location.href = "mainRoom.html";
});

let currentStep = 0;
const expectedSequence = [2, 5, 6, 3]; 
let collectedCode = [];

const puzzleData = {
    2: {
        img: "../pictures/open_book2.png", 
        hint: "הינשוף שומר על החוכמה. ספרו רק מסגרות שלמות.",
        digit: 3
    },
    5: {
        img: "../pictures/open_book5.png",
        hint: "העבר אהב קישוטים. ספרו רק סמלים עצמאיים.",
        digit: 6
    },
    6: {
        img: "../pictures/open_book6.png",
        hint: "מה שלא מתאים לאחרים חייב להיספר.",
        digit: 1
    },
    3: {
        img: "../pictures/open_book3.png",
        hint: "לא ההתחלה, לא הסוף. רק מה שבמרכז.",
        digit: 2
    }
};

function checkStar(bookNum) {
    const expectedBook = expectedSequence[currentStep];

    if (bookNum === expectedBook) {
        openPuzzle(bookNum);
    } else {
        alert("שום דבר מעניין כאן כרגע...");
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
        console.log("ספרות שנאספו: " + collectedCode.join(""));
    }
}

function closePuzzle() {
    document.getElementById("puzzleModal").style.display = "none";
    // אם פתחנו את החידה הנכונה, נתקדם לשלב הבא ברצף
    currentStep++; 
    
    if (currentStep === expectedSequence.length) {
        alert("אספת את כל הרמזים! עכשיו נסי לפתוח את המנעול.");
    }
}

function showHint() {
    document.getElementById("hintText").classList.toggle("hidden");
}