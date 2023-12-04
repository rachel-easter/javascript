//user input array:
function getUserInputArray() {
    const marksArray = [];
    const numSubjects = parseInt(prompt("Enter the number of subjects:"));

    for (let i = 0; i < numSubjects; i++) {
        let mark = parseFloat(prompt(`Enter marks for Subject ${i + 1}:`));
        marksArray.push(mark);
    }

    return marksArray;
}
//function for calculating the total marks and percentages:
function calculateTotalAndPercentage(marksArray) {
    const totalMarks = marksArray.reduce((acc, mark) => acc + mark, 0);
    const totalSubjects = marksArray.length;
    const percentage = (totalMarks / (totalSubjects * 100)) * 100;

    return { totalMarks, percentage };
}

// Get user input for an array of marks
const userMarksInput = getUserInputArray();

// Calculate total and percentage using the provided array
const results = calculateTotalAndPercentage(userMarksInput);

// Display the results
console.log(`Total Marks: ${results.totalMarks}`);
console.log(`Percentage: ${results.percentage.toFixed(2)}%`);
