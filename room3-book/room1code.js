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

localStorage.removeItem("introSeen");

const correctCode = "3612";
let isUnlocked = false;

/* Book popup */
if (bookBtn && popup) {
  bookBtn.addEventListener("click", () => {
    popup.classList.add("show");
  });
}

if (closeBtn && popup) {
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
  });
}

if (popup) {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
    }
  });
}

/* Hint button */
if (hintBtn && hintMessage) {
  hintBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    hintMessage.classList.toggle("show");
  });
}

/* Star navigation */
if (star) {
  star.addEventListener("click", () => {
    window.location.href = "BookNum.html";
  });
}

/* Intro screen */
if (startGameBtn) {
  startGameBtn.addEventListener("click", () => {
    localStorage.setItem("introSeen", "true");
    document.documentElement.classList.remove("show-intro");
  });
}

/* Lock click */
if (atticLock && lockModal && lockMessage) {
  atticLock.addEventListener("click", () => {
    if (isUnlocked) {
      if (winModal) {
        winModal.classList.add("show");
      }
    } else {
      lockModal.classList.add("show");
      lockMessage.textContent = "";
    }
  });
}

/* Close lock modal */
if (closeLockModal && lockModal) {
  closeLockModal.addEventListener("click", () => {
    lockModal.classList.remove("show");
  });
}

if (lockModal) {
  lockModal.addEventListener("click", (e) => {
    if (e.target === lockModal) {
      lockModal.classList.remove("show");
    }
  });
}

/* Keypad input */
if (lockKeys.length && lockDisplay) {
  lockKeys.forEach((key) => {
    key.addEventListener("click", () => {
      if (lockDisplay.value.length < 4) {
        lockDisplay.value += key.dataset.num;
      }
    });
  });
}

/* Clear lock input */
if (clearLock && lockDisplay && lockMessage) {
  clearLock.addEventListener("click", () => {
    lockDisplay.value = "";
    lockMessage.textContent = "";
  });
}

/* Submit lock code */
if (submitLock && lockDisplay && lockMessage && atticLock && lockModal) {
  submitLock.addEventListener("click", () => {
    if (lockDisplay.value === correctCode) {
      isUnlocked = true;
      lockMessage.textContent = "Unlocked!";
      atticLock.src = "pictures/bracket.png";

      setTimeout(() => {
        lockModal.classList.remove("show");
        lockDisplay.value = "";
        lockMessage.textContent = "";
      }, 700);
    } else {
      lockMessage.textContent = "Wrong code. Try again.";
    }
  });
}

/* Close win modal — proceed to next room */
if (closeWinModal && winModal) {
  closeWinModal.addEventListener("click", () => {
    window.location.href = "../room4-wedding/index.html";
  });
}

/* Escape key */
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (popup) popup.classList.remove("show");
    if (lockModal) lockModal.classList.remove("show");
    if (winModal) winModal.classList.remove("show");
  }
});

startGameBtn.addEventListener("click", () => {
  localStorage.setItem("introSeen", "true");
  document.documentElement.classList.remove("show-intro");
});