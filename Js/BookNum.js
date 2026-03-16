// Room 11 code
const backArrow = document.getElementById("backArrow");

backArrow.addEventListener("click", () => {
    window.location.href = "mainRoom.html";
});

function checkStar(num) {
    console.log("לחצת על כוכב מספר: " + num);
    alert("גילית את רמז מספר " + num + "!");
    
    // כאן בהמשך תוכלי להוסיף תנאים, למשל:
    // if(num === 3) { ... }
}