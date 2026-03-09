var balloonsAnswered = 0;
var firstAns = false;
var secondAns = false;
var thirdAns = false;
var fourthAns = false;
var fifthAns = false;

function about() {
    window.alert("Click each balloon from right to left and enter the name of the kid who recieved it!");
}

function door() {
    if (balloonsAnswered == 5) {
        var password = prompt("Enter the password:", "");
        if (password == "Miriam Ruth") {
            window.location.replace("fiveBalloons2.html")
        }
        else {
            window.alert("That's not the password!")
        }
    }
    else {
        window.alert("You haven't answered all the questions yet!")
    }
}

function firstB() {
    if (firstAns == true) {
        window.alert("You already answered this balloon's question!");
    }
    else {
        var firstKid = prompt("Whose Balloon is this?", "");
        if (firstKid == "Alon") {
            firstAns = true
            balloonsAnswered = balloonsAnswered + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (balloonsAnswered == 5) {
            window.alert("The password is 'Miriam Ruth'.");
        }
    }
}

function secondB() {
    if (secondAns == true) {
        window.alert("You already answered this balloon's question!");
    }
    else {
        var secondKid = prompt("Whose Balloon is this?", "");
        if (secondKid == "Uri") {
            secondAns = true
            balloonsAnswered = balloonsAnswered + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (balloonsAnswered == 5) {
            window.alert("The password is 'Miriam Ruth'.");
        }
    }
}

function thirdB() {
    if (thirdAns == true) {
        window.alert("You already answered this balloon's question!");
    }
    else {
        var thirdKid = prompt("Whose Balloon is this?", "");
        if (thirdKid == "Ruthi") {
            thirdAns = true
            balloonsAnswered = balloonsAnswered + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (balloonsAnswered == 5) {
            window.alert("The password is 'Miriam Ruth'.");
        }
    }
}

function fourthB() {
    if (fourthAns == true) {
        window.alert("You already answered this balloon's question!");
    }
    else {
        var fourthKid = prompt("Whose Balloon is this?", "");
        if (fourthKid == "Sigalit") {
            fourthAns = true
            balloonsAnswered = balloonsAnswered + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (balloonsAnswered == 5) {
            window.alert("The password is 'Miriam Ruth'.");
        }
    }
}

function fifthB() {
    if (fifthAns == true) {
        window.alert("You already answered this balloon's question!");
    }
    else {
        var fifthKid = prompt("Whose Balloon is this?", "");
        if (fifthKid == "Ron") {
            fifthAns = true
            balloonsAnswered = balloonsAnswered + 1
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, please try again!");
        }
        if (balloonsAnswered == 5) {
            window.alert("The password is 'Miriam Ruth'.");
        }
    }
}

