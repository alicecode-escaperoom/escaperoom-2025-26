const safe = document.getElementById("safe");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

// פתיחת החלון
safe.onclick = () => {
  document.getElementById("codeInput").value = "";
  message.textContent = "";
  modal.style.display = "block";
};

// סגירת החלון
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// בדיקת קוד
checkBtn.onclick = () => {
  const userCode = document.getElementById("codeInput").value;

  if (userCode === "987") {
    message.textContent = "נכון! הכספת נפתחה 🎉";
    message.style.color = "green";
  } else {
    message.textContent = "קוד שגוי, נסה/י שוב";
    message.style.color = "red";
}
};

// סגירה בלחיצה מחוץ לחלון
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};