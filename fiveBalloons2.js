var balloonsAnswered = 0;
function about() {
    window.alert("Click each balloon from right to left and enter the way it poped!");}

function but1(){
    var q1 = prompt("How did Ron's yellow balloon burst?:", "");
    if (q1=="His dad added too much air to it") {
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");}
        else if (q1=="."){
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");
        }
    else{
        window.alert("try again!"); 
    }
    if (balloonsAnswered == 5) {
        window.alert("The password is 'good'.");
    }
}

function but2(){
    var q2 = prompt("How did Uri's green balloon burst?:", "");
    if (q2=="A rose bush poked through it") {
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");}
    else if (q2=="."){
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");
        }
    else{
        window.alert("try again!"); 
    }
    if (balloonsAnswered == 5) {
        window.alert("The password is 'good'.");
    }
}


function but3(){
    var q3 = prompt("How did someone's balloon burst from squeezing?:", "");
    if (q3=="She squeezed it too hard") {
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");}
    else if (q3=="."){
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");
        }
    else{
        window.alert("try again!"); 
    }
    if (balloonsAnswered == 5) {
        window.alert("The password is 'good'.");
    }
}

function but4(){
    var q4 = prompt("How did someone's balloon get scratched?:", "");
    if (q4=="Her cat scratched it") {
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");}
    else if (q4=="."){
        balloonsAnswered = balloonsAnswered + 1
        window.alert("Correct!");
        }
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
            window.alert("You escaped! Congratulations!");
        }
        else {
            window.alert("That's not the password!")
        }
    }
    else {
        window.alert("You haven't answered all the questions yet!")
    }
}