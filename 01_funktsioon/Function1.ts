// Function 01
function sayHello(): string {
    return "Hello World";
}

let message1 = sayHello();
console.log(message1);

// Function 02
function multiply(a: number, b: number): number {
    return a * b;
}

let result = multiply(3, 4);
console.log(result);

// Function 03
// Calculate BMI
function bodyMassIndex(cm: number, kg: number): number {
    // Step 01: Convert cm to meters
    let m: number = cm / 100;

    // Step 02: Return BMI value using the formula
    return kg / (m * m);
}

// Input two numbers and print result
console.log(bodyMassIndex(175, 70));

// Array of weights
let weights: number[] = [80, 90, 100, 110, 115];

// Calculate BMI using a loop
for (let weight of weights) {
    console.log(bodyMassIndex(180, weight));
}

// Use map to calculate BMI values
let bmiValues: number[] = weights.map(weight => bodyMassIndex(180, weight));
console.log(bmiValues);

// Function 04
// Alternative BMI formula
function bodyMassIndex2(cm: number, kg: number): number {
    let m: number = cm / 100;
    return 1.3 * kg / Math.pow(m, 2.5);
}

// Calculate BMI using the alternative formula
let bmiValues2: number[] = weights.map(weight => bodyMassIndex2(180, weight));
console.log(bmiValues2);

// Build a table of results
let results: number[][] = [];

for (let height = 150; height < 190; height += 2) {
    results.push([
        height,
        bodyMassIndex(height, 90),
        bodyMassIndex2(height, 90)
    ]);
}

console.log(results);

// Function 05
// Calculate the area of a circle
function circleArea(radius: number): number {
    const pi: number = 3.1415;

    // Area formula: π × r²
    let area: number = pi * Math.pow(radius, 2);

    // Round to 2 decimal places
    let roundedArea: number = Math.round(area * 100) / 100;

    return roundedArea;
}

let radius: number = 10;
let area: number = circleArea(radius);

console.log("Area of the circle with radius " + radius + " is " + area);