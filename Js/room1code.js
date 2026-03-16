const bookBtn = document.getElementById("bookButton");
const popup = document.getElementById("bookPopup");
const closeBtn = document.getElementById("closePopup");
const hintBtn = document.getElementById("hintBtn");
const hintMessage = document.getElementById("hintMessage");

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

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.classList.remove("show");
  }
});