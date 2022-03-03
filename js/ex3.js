console.log(" HW 5 ex 3 - Student Objects");
//Declare studentList Array
const studentList = [  {
      name: "Allan",
      lastName: "Able",
      sex: "f",
      grades: [95, 85, 92, 98]
  },
  {
    name: "Amy",
    lastName: "Alexander",
    sex: "f",
    grades: [80, 88, 100]
}
]
//asher code

const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

// Original code commented out, not using Array Operations

// Compute female student results
// const femaleStudentsResults = [];
// for (const student of students) {
//   if (student.sex === "f") {
//     let gradesSum = 0;
//     for (const grade of student.grades) {
//       gradesSum += grade;
//     }
//     const averageGrade = gradesSum / student.grades.length;
//     femaleStudentsResults.push({
//       name: student.name,
//       avgGrade: averageGrade
//     });
//   }
// }

// Method 1
// Create a function to compute an arrays average and use it in filter / map
const arrayAvg = (arr) => arr.reduce((sum, x) => sum + x, 0) / arr.length;

// Test the generic function
const tstArray = [1, 2, 3, 4, 5];
console.log("Test arrayAvg: ", arrayAvg(tstArray)); // Should be 3

// Use filter, then map to generate result
const femaleStudentsResults = students.filter(student => student.sex === "f").map(student => {
  // Use braces since we will return an object using multiple lines of code
  // Note that you need to return an object (recall syntax)
  return {   //The brace must follow the return, otherwise you will return nothing: lines after the return will be ignored
    avgGrade: arrayAvg(student.grades),  // Pass the student grades to the arrayAvg function we created
    name: student.name
  };
});

console.log("Method 1: ", femaleStudentsResults);

// Method 2
//  Create a generic filter function rather than using the filter method
const filter = (array, func) => array.filter(func);
byFemale = (array) => array.sex === "f";  // Function to filter by females

// Test the filter method
console.log("Test generic filter: ", filter(students, byFemale));  // Should be an array of female student objects (Anna and Martha);

// Use the generic function followed by map
const femaleStudentsResults2 = filter(students, byFemale).map(student => {
  return {
    avgGrage: arrayAvg(student.grades),
    name: student.name
  };
});

console.log("Method 2: ", femaleStudentsResults2);

// Method 3 
//   Don't use a generic function to compute the average, create the average as needed during mapping
//   Can use this with both method 1 or method 2.  I'll demonstrate it with method 1.
const femaleStudentsResults3 = students.filter(student => student.sex === "f").map(student => {
  return {
    avgGrade : student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length,
    name: student.name 
  };
});

console.log("Method 3: ", femaleStudentsResults3);

const arraytst = [];
  arraytst.push(femaleStudentsResults3);
console.log(arraytst.flat(3),"arraytst");

//for (i = 1; i <= 2; i++) {
////  console.log(arraytst[0]);
//}
// On your own - Enahnce the above to display the max score for each student.
//  Can create a function and use it in the mapping (like method 1) or
//    create the max as needed (like method 3)


