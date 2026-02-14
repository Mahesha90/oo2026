// ------------------------------------------------------
// Course class
// Represents a university course with a credit value
class Course {
  constructor(protected credits: number) {}

  // Method to calculate GPA contribution
  // Formula: grade × credits
  gpaContribution(grade: number): number {
    return grade * this.credits;
  }

  // Getter to read the number of credits
  getCredits(): number {
    return this.credits;
  }
}

// ------------------------------------------------------
// Define courses and their credits
let math = new Course(4);
let english = new Course(6);
let programming = new Course(2);

// ------------------------------------------------------
// Define my grades
let mathGrade = 4.0;
let englishGrade = 3.3;
let programmingGrade = 3.7;

// ------------------------------------------------------
// Calculate total GPA points
let totalPoints = 0;

totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);

// Calculate total credits
let totalCredits =
  math.getCredits() +
  english.getCredits() +
  programming.getCredits();

// Final GPA = total points / total credits
let gpa = totalPoints / totalCredits;

console.log("My GPA is:", gpa);

// ------------------------------------------------------
// Create an array of students with their grades
let students1 = [
  { name: "Alice", math: 4.0, english: 3.3, programming: 3.7 },
  { name: "Bob", math: 3.0, english: 3.3, programming: 2.7 },
  { name: "Clara", math: 3.3, english: 3.8, programming: 3.2 },
];

// ------------------------------------------------------
// Calculate GPA for each student
for (let student of students1) {
  let totalPoints = 0;

  totalPoints += math.gpaContribution(student.math);
  totalPoints += english.gpaContribution(student.english);
  totalPoints += programming.gpaContribution(student.programming);

  let gpa = totalPoints / totalCredits;

  console.log(student.name + " GPA:", gpa);
}