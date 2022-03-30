const Human = { FirstName: "Kahan", LastName: "Chokshi", age: 25 };
for (let H in Human) {
  document.write("<br/>" + H);
}
document.write("<hr/>");
for (let H in Human) {
  document.write("<br/>" + Human[H]);
}