//Function 01
function sayHello() {
    return "Hello Word";
}
var message1 = sayHello();
console.log(message1);
//Function 02
function multiply(a, b) {
    return a * b;
}
var result = multiply(3, 4);
console.log(result);
//Function 03
//Calculate BMI
function bodyMassIndex(cm, kg) {
    //Step 01: Conver CM to M
    var m = cm / 100;
    //Step 02: Retun BMI value using formula
    return kg / (m * m);
}
//Input two numbers and print result using console.log
console.log(bodyMassIndex(175, 70));
var weights = [80, 90, 100, 110, 115];
for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
    var weight = weights_1[_i];
    console.log(bodyMassIndex(180, weight));
}
//map runs the given function once for each value in the array.
//For each weight, BMI is called.
//The returned BMI values are collected into a new array.
var bmivalue = weights.map(function (weight) { return bodyMassIndex(180, weight); });
console.log(bmivalue);
//Function 04- But different function for BMI
//Alternative formula for BMI
function bodyMassIndex2(cm, kg) {
    var m = cm / 100;
    return 1.3 * kg / Math.pow(m, 2.5);
}
var bmivalue2 = weights.map(function (weight) { return bodyMassIndex2(180, weight); });
console.log(bmivalue2);
var results = [];
for (var height = 150; height < 190; height += 2) {
    results.push([
        height,
        bodyMassIndex(height, 90),
        bodyMassIndex2(height, 90)
    ]);
}
console.log(results);
//Write a function to calculate the area of a circle
//    // We store the value of pi (used in circle calculations)
//const pi: number = 3.1415;
// Here we calculate the area of the circle
// We multiply pi by the radius times the radius
// let area: number = pi * Math.pow(radius, 2);
function circleArea(radius) {
    var pi = 3.1415;
    var area = pi * Math.pow(radius, 2);
    var roundArea = Math.round(area * 100 / 100);
    return roundArea;
}
var radius = 10;
var area = circleArea(radius);
console.log("area of the circle with radius " + radius + "is " + area);
