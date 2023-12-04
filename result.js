// Taking user input for three subjects' marks
let subject1Marks = parseFloat(prompt("Enter marks for Subject 1:"));
let subject2Marks = parseFloat(prompt("Enter marks for Subject 2:"));
let subject3Marks = parseFloat(prompt("Enter marks for Subject 3:"));

// Assuming passing marks for each subject is 40
const passingMarks = 40;

// Calculate total marks
const totalMarks = subject1Marks + subject2Marks + subject3Marks;

// Determine status and grades
let status, grades;

if (subject1Marks >= passingMarks && subject2Marks >= passingMarks && subject3Marks >= passingMarks) {
    status = "Pass";

    // Assign grades based on total marks
    if (totalMarks >= 300) {
        grades = "A";
    } else if (totalMarks >= 200) {
        grades = "B";
    } else if (totalMarks >= 100) {
        grades = "C";
    } else {
        grades = "D";
    }
} else {
    status = "Fail";
    grades = "F";
}

// Output results
console.log(`Total Marks: ${totalMarks}`);
console.log(`Status: ${status}`);
console.log(`Grades: ${grades}`);
