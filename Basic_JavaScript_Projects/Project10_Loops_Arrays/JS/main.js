function Call_Loop() {
    var digit = ""; //Sets variable number
    var X = 1; //Creates increase
    while (X < 11) { //Creates loop that will run till the number 11 is reached
        digit += "<br>" + X; //Causes digit to increase by X variable
        X++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

function String_Length() {
    var text = "Click for the length of this text."; //Sets string
    var length = text.length; //Finds string length
    document.getElementById("Length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function For_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
      Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

function Cat_Pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function Constant_Function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; //sets constants
    Musical_Instrument.color = "blue"; //cannot overwrite constant
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function Let_Function() {
    let X = 34
    document.getElementById("Let").innerHTML = "Your lucky number is: " + X + "!";
}

function Return_Function() {
    let Statment = "RETURN";
    return "This function uses the " + Statment + " statement."; //Return specifies the value that a function should output
}
document.getElementById("Return").innerHTML = Return_Function()

let car = {
    make: "Toyota ",
    model: "Seqouia ",
    year: "2003 ",
    color: "black ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

function Break_Function() {
    let Text = "";
    for (let i = 0; i < 5; i++) {
        if (i === 3) break; //Causes a break in count on 3
        Text += i + "<br>";
    }
    document.getElementById("Break").innerHTML = Text;
}

function Continue_Function() {
    let Text = "";
    for (let i = 0; i < 5; i++) {
        if (i === 3) continue; //Causes a skip of 3 and continues with 4
        Text += i + "<br>";
    }
    document.getElementById("Continue").innerHTML = Text;
}