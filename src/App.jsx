import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
const [students, setStudents] = useState(() => {
const savedStudents =
localStorage.getItem("students");

return savedStudents
  ? JSON.parse(savedStudents)
  : [];

});

const [searchTerm, setSearchTerm] =
useState("");

useEffect(() => {
localStorage.setItem(
"students",
JSON.stringify(students)
);
}, [students]);

const addStudent = (student) => {
setStudents([...students, student]);
};

const deleteStudent = (id) => {
setStudents(
students.filter(
(student) => student.id !== id
)
);
};

const filteredStudents =
students.filter((student) =>
student.name
.toLowerCase()
.includes(
searchTerm.toLowerCase()
)
);

return ( <div className="container"> <h1>
Student Management System </h1>


  <input
    type="text"
    placeholder="Search Student..."
    value={searchTerm}
    onChange={(e) =>
      setSearchTerm(e.target.value)
    }
    className="search"
  />

  <Dashboard students={students} />

  <StudentForm
    addStudent={addStudent}
  />

  <StudentTable
    students={filteredStudents}
    deleteStudent={deleteStudent}
  />
</div>

);
}

export default App;

