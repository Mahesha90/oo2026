// ------------------------------------------------------
// Course class
// Represents a university course with a credit value
var Course = /** @class */ (function () {
    function Course(credits) {
        this.credits = credits;
    }
    // Method to calculate GPA contribution
    // Formula: grade × credits
    Course.prototype.gpaContribution = function (grade) {
        return grade * this.credits;
    };
    // Getter to read the number of credits
    Course.prototype.getCredits = function () {
        return this.credits;
    };
    return Course;
}());
// ------------------------------------------------------
// Define courses and their credits
var math = new Course(4);
var english = new Course(6);
var programming = new Course(2);
// ------------------------------------------------------
// Define my grades
var mathGrade = 4.0;
var englishGrade = 3.3;
var programmingGrade = 3.7;
// ------------------------------------------------------
// Calculate total GPA points
var totalPoints = 0;
totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);
// Calculate total credits
var totalCredits = math.getCredits() +
    english.getCredits() +
    programming.getCredits();
// Final GPA = total points / total credits
var gpa = totalPoints / totalCredits;
console.log("My GPA is:", gpa);
// ------------------------------------------------------
// Create an array of students with their grades
var students1 = [
    { name: "Alice", math: 4.0, english: 3.3, programming: 3.7 },
    { name: "Bob", math: 3.0, english: 3.3, programming: 2.7 },
    { name: "Clara", math: 3.3, english: 3.8, programming: 3.2 },
];
// ------------------------------------------------------
// Calculate GPA for each student
for (var _i = 0, students1_1 = students1; _i < students1_1.length; _i++) {
    var student = students1_1[_i];
    var totalPoints_1 = 0;
    totalPoints_1 += math.gpaContribution(student.math);
    totalPoints_1 += english.gpaContribution(student.english);
    totalPoints_1 += programming.gpaContribution(student.programming);
    var gpa_1 = totalPoints_1 / totalCredits;
    console.log(student.name + " GPA:", gpa_1);
}
