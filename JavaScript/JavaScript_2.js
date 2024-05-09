function validationForm() {
    let f = document.forms["myForm"]["fname"].value;
    let l = document.forms["myForm"]["lname"].value;
    let e = document.forms["myForm"]["email"].value;
    let p = document.forms["myForm"]["number"].value;
    if (f == "") {
        alert("First name must be filled out")
        return false;
    }
    if (l == "") {
        alert("Last name must be filled out")
        return false;
    }
    if (e == "") {
        alert("Email must be filled out")
        return false;
    }
    if (p == "") {
        alert("Phone number must be filled out")
        return false;
    }
}