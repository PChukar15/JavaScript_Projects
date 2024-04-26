function my_Dictionary() {
    var Burned_Man = { //Key
        Name: "Joshua Graham", //Values
        Race: "Human",
        Tribe: "New Caaninites",
        Formerly: "Caesars Legate"
    };
    document.getElementById("Dictionary").innerHTML = Burned_Man.Name; //Calls keys value
}

function my2_Dictionary() {
    var Mutie = { //Key
        Name: "Frank Horrigan", //Values
        Race: "Mutant",
        Tribe: "Enclave",
        Formerly: "Human"
    };
    console.log(delete Mutie.name) //This line deletes the key before it is displayed
    document.getElementById("Dictionary2").innerHTML = Mutie.Name;
}
