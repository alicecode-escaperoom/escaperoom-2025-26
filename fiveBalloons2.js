var balloonsAnswered = 0;
function about() {
    window.alert("Click each balloon from right to left and enter the way it popped!");}

function yellow() {
    var q1 = prompt("How did Ron's yellow balloon burst?", "");
    if (q1=="His dad added too much air to it") {
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");}
    else{
        window.alert("try again!"); 
    }
    if (balloonsAnswered == 5) {
        window.alert("The password is 'good'.");
    }
}


function green(){
    var q2 = prompt("How did Uri's green balloon burst?", "");
    if (q2=="A rose bush poked through it") {
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");}
    else{
        window.alert("try again!"); 
    }
    if (balloonsAnswered == 5) {
        window.alert("The password is 'good'.");
    }
}


function blue(){
    var q3 = prompt("How did Ruthi's blue balloon burst?", "");
    if (q3=="She squeezed it too hard") {
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");}
    else{
        window.alert("try again!"); 
    }
    if (balloonsAnswered == 5) {
        window.alert("The password is 'good'.");
    }
}

function purple(){
    var q4 = prompt("How did Sigalit's purple balloon burst?", "");
    if (q4=="Her cat scratched it") {
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");}
    else{
        window.alert("try again!"); }
    if (balloonsAnswered == 5) {
        window.alert("The password is 'good'.");
        }
}

function red(){
    var q5 = prompt("How did Alon's red balloon burst?", "");
    if (q5=="It flew away") {
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");}
    else{
        window.alert("try again!"); }
    if (balloonsAnswered == 5) {
        window.alert("The password is 'good'.");
        }
}



function win() {
    if (balloonsAnswered == 5) {
        var password = prompt("Enter the password:", "");
        if (password == "good") {
            window.location.replace("fiveBalloonsFinish.html")
        }
        else {
            window.alert("That's not the password!")
        }
    }
    else {
        window.alert("You haven't answered all the questions yet!")
    }
}