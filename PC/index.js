class Student {
  constructor(name, section, score) {
    this.name = name;
    this.section = section;
    this.score = score;
  }

  getStatus() {
    return this.score >= 75 ? "Passed" : "Failed";
  }
}

class Leader extends Student {
  getStatus() {
    return this.score >= 70 ? "Passed as Leader" : "Failed";
  }
}

const students = [
  new Student("John Davis", "2-A", 85),
  new Student("Maria Cruz", "2-A", 92),
  new Student("Mark Reyes", "3-B", 70),
  new Leader("Anna Santos", "3-B", 73),
  new Student("Peter Lim", "2-C", 88),
];

// Display all students
console.log("=== ALL STUDENTS ===");

for (const student of students) {
  console.log(
    `${student.name} | ${student.section} | ${student.score} | ${student.getStatus()}`,
  );
}

// Filter students who passed
const passedStudents = students.filter((student) => student.score >= 75);

console.log("\n=== PASSED STUDENTS ===");

passedStudents.forEach((student) => {
  console.log(`${student.name} - ${student.score}`);
});

// Sort students from highest to lowest score
students.sort((a, b) => b.score - a.score);

console.log("\n=== RANKING ===");

students.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} - ${student.score}`);
});

// Find John Davis
const john = students.find((student) => student.name === "John Davis");

console.log("\n=== SEARCH RESULT ===");

if (john) {
  console.log(`Found: ${john.name}`);
  console.log(`Section: ${john.section}`);
  console.log(`Score: ${john.score}`);
}

// Calculate average
let total = 0;

for (const student of students) {
  total += student.score;
}

const average = total / students.length;

console.log("\nAverage Score:", average.toFixed(2));
