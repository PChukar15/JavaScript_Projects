function Full_Sentence() { //Sets function start
    var part_1 = "I have ";
    var part_2 = "made this "; //Pieces of the full string
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Puts the pieces together into full sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence; //Calls the full sentence on button click
}

function Slice_Function() { //Sets function
    var Sentence = "All work and no play makes Johnny a dull boy."; //Creates base string
    var Section = Sentence.slice(27, 33); //Selects pieces of string to slice out
    document.getElementById("Slice").innerHTML = Section;
}

function Up_Function() {
    var Lower = "emmett espinosa" //Sets base string
    var Upper = Lower.toUpperCase() //Converts base string to upper case
    document.getElementById("UP").innerHTML = Upper;
}

function Search_Function() {
    let Text = "God I really love dogs."; //Sets base string
    let Position = Text.search("dogs"); //selects search to be conducted
    document.getElementById("Search").innerHTML = Position;
}

function String_Method() {
    var X = 340; //sets number
    document.getElementById("Number_to_String").innerHTML = X.toString(); //Converts number to string
}

function Precision_Method() {
    var X = 34015.9367852134; //sets number
    document.getElementById("Precision").innerHTML = X.toPrecision(9); //Sets precision point for number
}

function Fixer_Function() {
    var Fix = 5.341.toFixed(2); //Sets number and rounds to a set decimal place
    document.getElementById("Fixer").innerHTML = Fix;
}

function Primitive_Function() {
    let Text = "This shall be returned Primitively."; //Sets the base string
    let Result = Text.valueOf(); //Returns the primitive value of the string
    document.getElementById("Primitive").innerHTML = Result;
}