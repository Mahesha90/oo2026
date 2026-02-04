var message = "Hello world";
console.log(message);
//Create variable for your name and another one for age. Then in the console print name.
var firstname = "Mahesha";
var age = 15;
console.log("My name is " + firstname + " my age is " + age);
if (age < 7) {
    console.log("Free");
}
else {
    console.log("Buy a ticket");
    if (age < 16) {
        console.log("Child Chicket");
    }
    else {
        console.log("Full ticket");
    }
}
var symbols = []; //empty array
for (var nr = 0; nr < age; nr++) {
    symbols.push("*");
}
console.log(symbols);
console.log(symbols.join(""));
