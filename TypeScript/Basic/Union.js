// Union Variable.
var val;
val = 12;
console.log("Numeric: " + val);
val = "God Is Great..!!";
console.log("String: " + val);
// Union with Array.
var arr;
var i;
arr = [1, 2, 4];
console.log("Numeric Array:");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("String Array:");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//Union with Function
function showFun(nm) {
    if (typeof nm == "string") {
        console.log(nm);
    }
    else {
        var i;
        for (i = 0; i < nm.length; i++) {
            console.log(nm[i]);
        }
    }
}
showFun("Abhishek Pujara");
showFun(["Abhishek", "Nidhi", "Jay"]);
