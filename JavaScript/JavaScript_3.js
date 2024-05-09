function displayType(protagonist) {
    var characterType = protagonist.getAttribute("data-protagonist-type");
    alert(characterType + " is the protagonist of " + protagonist.innerHTML + "!");
}