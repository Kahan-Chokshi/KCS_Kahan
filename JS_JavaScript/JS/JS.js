function Alert() {
    alert("Alert From External");
}
function Confirm() {
    if (confirm("Are you sure..")) {
        alert("YEP");
    }
    else {
        alert("NOPE");
    }
}
function Prompt() {
    var fName = prompt("Enter Firstname Here..");
    var lName = prompt("Enter Lastname Here..");
    alert(fName + " " + lName);
}