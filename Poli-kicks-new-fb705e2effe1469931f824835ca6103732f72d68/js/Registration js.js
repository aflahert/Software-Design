
// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('passw').value == "" ) {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('cover').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('cover').style.display = "none";
}
//Form submitted when Sign up
function funSubmitted() {
    alert("The form was submitted, Thanks");
}