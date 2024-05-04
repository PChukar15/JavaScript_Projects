var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_number_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_number_2() {
    document.write(X + 100);
}
Add_number_1();
Add_number_2();

function Add_numbers_log_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_log_2() {
    console.log(X + 100);
}
Add_numbers_log_1();
Add_numbers_log_2();

function get_data() {
    if (new Date().getHours() < 9) {
        document.getElementById("Greetings").innerHTML = "How are you today?";
    }
    if (new Date().getHours() > 9) {
        document.getElementById("Greetings").innerHTML = "Hows your day been?";
    }
}

function Early_Reminder() {
    if (6 < new Date().getHours() < 10) {
        document.getElementById("Reminder").innerHTML = "Dont forget to eat breakfast!";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_Old_Are_You?").innerHTML = Vote;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}