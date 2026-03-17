const bookBtn = document.getElementById("bookButton");
const popup = document.getElementById("bookPopup");
const closeBtn = document.getElementById("closePopup");
const hintBtn = document.getElementById("hintBtn");
const hintMessage = document.getElementById("hintMessage");
const star = document.getElementById("magicStar");
const introScreen = document.getElementById("introScreen");
const startGameBtn = document.getElementById("startGameBtn");

const atticLock = document.getElementById("atticLock");
const lockModal = document.getElementById("lockModal");
const closeLockModal = document.getElementById("closeLockModal");
const lockDisplay = document.getElementById("lockDisplay");
const lockMessage = document.getElementById("lockMessage");
const clearLock = document.getElementById("clearLock");
const submitLock = document.getElementById("submitLock");
const lockKeys = document.querySelectorAll(".lock-key[data-num]");

const winModal = document.getElementById("winModal");
const closeWinModal = document.getElementById("closeWinModal");

const correctCode = "3612";

let isUnlocked = false;

bookBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("show");
  }
});

hintBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  hintMessage.classList.toggle("show");
});

star.addEventListener("click", () => {
  window.location.href = "BookNum.html";
});

startGameBtn.addEventListener("click", () => {
  introScreen.style.display = "none";
});

atticLock.addEventListener("click", () => {
  if (isUnlocked) {
    winModal.classList.add("show");
  } else {
    lockModal.classList.add("show");
    lockMessage.textContent = "";
  }
});

closeLockModal.addEventListener("click", () => {
  lockModal.classList.remove("show");
});

lockModal.addEventListener("click", (e) => {
  if (e.target === lockModal) {
    lockModal.classList.remove("show");
  }
});

lockKeys.forEach((key) => {
  key.addEventListener("click", () => {
    if (lockDisplay.value.length < 4) {
      lockDisplay.value += key.dataset.num;
    }
  });
});

clearLock.addEventListener("click", () => {
  lockDisplay.value = "";
  lockMessage.textContent = "";
});

submitLock.addEventListener("click", () => {
  if (lockDisplay.value === correctCode) {
    isUnlocked = true;
    lockMessage.textContent = "Unlocked!";
    atticLock.src = "../pictures/bracket.png";
    setTimeout(() => {
      lockModal.classList.remove("show");
    }, 700);
  } else {
    lockMessage.textContent = "Wrong code. Try again.";
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.classList.remove("show");
    lockModal.classList.remove("show");
  }
});

closeWinModal.addEventListener("click", () => {
  winModal.classList.remove("show");
});