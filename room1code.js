const bookBtn = document.getElementById("bookButton");
const popup = document.getElementById("bookPopup");
const closeBtn = document.getElementById("closePopup");

bookBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

// סגירה בלחיצה על השחור מסביב
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.remove("show");
});

// סגירה עם ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") popup.classList.remove("show");
});