const express = require("express");

const app = express();
const PORT = 3000;

// Sample data
const students = [
  { id: 1, name: "John Davis", course: "BSIT", year: 2 },
  { id: 2, name: "Anna Davis", course: "BSIT", year: 4 },
  { id: 3, name: "Smith Will", course: "BSIT", year: 1 },
  { id: 4, name: "Sarah Cruz", course: "BSN", year: 2 },
  { id: 5, name: "Maria Santos", course: "BSN", year: 3 },
];

// Home
app.get("/", (req, res) => {
  res.send("Welcome to the Student API");
});

// Get all students or filter by course
app.get("/students", (req, res) => {
  const course = req.query.course;

  if (course) {
    const filteredStudents = students.filter(
      (s) => s.course === course.toUpperCase(),
    );

    return res.json(filteredStudents);
  }

  res.json(students);
});

// Get student by ID
app.get("/students/:id", (req, res) => {
  const studentId = Number(req.params.id);

  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({
      error: "Student not found",
    });
  }

  res.json(student);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
