x = 10; //values for later
b = 10;
a = "10+;"

document.write(typeof 3); //displays value type

document.write(2E310); //big enough to be infinity

document.write(-3E310); //negative infinity

document.write(10 < 2); //judges statment as true or false

console.log(2 + 2); //prints 4 in the console

console.log(2 > 10); //prints false in the console

document.write(10 == 10); //checks statement truth

document.write(10 == 3); //checks statments truth

document.write(x === b); //checks statements truth

document.write(x === a); //checks statments truth

document.write(5 < 10 && 10 > 4); //checks both statments for if eithers false

document.write(5 > 10 && 10 < 4);

document.write(5 < 10 || 10 < 4); //checks both statments for if one is true

document.write(5 > 10 || 10 < 4);

function not_function() { //not statment(opposite)
    document.getElementById("not").innerHTML = !(20 > 10);
}

function not2_function() { //not statment double negative
    document.getElementById("not2").innerHTML = !(20 < 10);
}