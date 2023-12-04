
const students = [
  { id: 1, name: "John", department_id: 101 },
  { id: 2, name: "Jane", department_name: "Computer Science" },
  { id: 3, name: "Bob", department_id: 102 },
  
];

// Function to get students by department
function getStudentsByDepartment(array, departmentIdentifier) {
  // Use filter to get students matching the given department
  return array.filter(student => {
    if ("department_id" in student) {
      return student.department_id === departmentIdentifier;
    } else if ("department_name" in student) {
      return student.department_name.toLowerCase() === departmentIdentifier.toLowerCase();
    } else {
      return false;
    }
  });
}


const computerScienceStudents = getStudentsByDepartment(students, "Computer Science");
console.log("Computer Science Students:", computerScienceStudents);

const department101Students = getStudentsByDepartment(students, 101);
console.log("Department 101 Students:", department101Students);
