// Create an array of student objects.
// Each object stores one student's information.
const students = [
  {
    studentId: 1,
    name: "Sei",
    age: 20,
    course: "BSIT",
    enrolled: true,
    yearLevel: 3,
  },
  {
    studentId: 2,
    name: "Anna",
    age: 20,
    course: "BSIT",
    enrolled: false,
    yearLevel: 2,
  },
  {
    studentId: 3,
    name: "Muta",
    age: 21,
    course: "BSBA",
    enrolled: false,
    yearLevel: 3,
  },
  {
    studentId: 4,
    name: "Bucay",
    age: 21,
    course: "BSBA",
    enrolled: true,
    yearLevel: 2,
  },
];

// push(object) adds a new student object to the END of the array.
// Example: students.push({ studentId: 6, name: "John" });

// unshift(object) adds a new student object to the START of the array.
students.unshift({
  studentId: 5,
  name: "Neeh",
  age: 24,
  course: "BSBA",
  enrolled: true,
  yearLevel: 2,
});

// pop() removes the LAST student from the array.
// students.pop();

// shift() removes the FIRST student from the array.
// students.shift();

// filter() creates a NEW array containing only students
// whose course is "BSBA". It does not change the original array.
// "student" represents each student being checked.
let filteredStudents = students.filter((student) => student.course === "BSBA");

// Display the filtered students in the console.
console.log(filteredStudents);

// async allows us to use await inside this function.
// This function retrieves comments and displays matching results.
async function getComments() {
  // fetch() sends a request to the URL.
  // await waits for the server's response.
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments",
  );

  // Convert the JSON response into JavaScript data.
  // Here, the data is an array of comment objects.
  const data = await response.json();

  // filter() keeps comments whose id equals their postId.
  // === checks whether both values are equal without converting types.
  // "comment" represents each comment being checked.
  let filteredComments = data.filter(
    (comment) => comment.id === comment.postId,
  );

  // forEach() runs this function once for every matching comment.
  filteredComments.forEach((comment) => {
    // Template literals use backticks and ${} to insert values into text.
    console.log(`Name: ${comment.name}`);
    console.log(`Email: ${comment.email}`);
    console.log(`Body: ${comment.body}`);
  });
}

// Call the function to start retrieving and displaying comments.
getComments();
