var num1 = 10 //sets variables used in functions
var num2 = 15


function addition_function() { //creates addition function
    var addition= num2 + num1;
    document.getElementById("add").innerHTML = "15 + 10 = " + addition;
}

function subtraction_function() { //creates subtraction function
    var subtraction = num2 - num1;
    document.getElementById("sub").innerHTML = "15 - 10 = " + subtraction;
}

function multiply_function() { //creates multiplication function
    var multiply= num1 * num2;
    document.getElementById("multiply").innerHTML = "10 x 15 = " + multiply;
}

function remainder_function() { //creates division function showing remainder
    var modulus= num2 % num1;
    document.getElementById("modulus").innerHTML = "15 divided by 10 leaves a remainder of: " + modulus;
}

function increment_function() { //creates increment of 10
    var increment= num1;
    increment++;
    document.getElementById("increment").innerHTML = "Increment of 10 is: " + increment;
}

function decrement_function() { //creates decrement of 10
    var decrement= num1;
    decrement--;
    document.getElementById("decrement").innerHTML = "Decrement of 10 is: " + decrement;
}

function random_function() { //produces a random number between 1 and 100
    var random = (Math.random() * 100)
    document.getElementById("random").innerHTML = "And your random number is: " + random;
}