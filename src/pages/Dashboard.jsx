import { useState, useEffect } from "react";

function Dashboard() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Harini",
            course: "B.Sc CS",
            mark: 99,
            attendance: 95,
          },
          {
            id: 2,
            name: "Priya",
            course: "BCA",
            mark: 95,
            attendance: 92,
          },
          {
            id: 3,
            name: "Kaviya",
            course: "B.Sc IT",
            mark: 90,
            attendance: 88,
          },
        ];
  });

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [mark, setMark] = useState("");
  const [attendance, setAttendance] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);

  const addStudent = () => {
    if (!name || !course || !mark || !attendance) {
      alert("Fill all fields");
      return;
    }

    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId
            ? {
                ...student,
                name,
                course,
                mark: Number(mark),
                attendance: Number(attendance),
              }
            : student
        )
      );
      setEditId(null);
    } else {
      const newStudent = {
        id: Date.now(),
        name,
        course,
        mark: Number(mark),
        attendance: Number(attendance),
      };

      setStudents([...students, newStudent]);
    }

    setName("");
    setCourse("");
    setMark("");
    setAttendance("");
  };

  const editStudent = (student) => {
    setName(student.name);
    setCourse(student.course);
    setMark(student.mark);
    setAttendance(student.attendance);
    setEditId(student.id);
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalStudents = students.length;

  const averageMark =
    students.length > 0
      ? (
          students.reduce(
            (sum, student) => sum + student.mark,
            0
          ) / students.length
        ).toFixed(1)
      : 0;

  const topper =
    students.length > 0
      ? students.reduce((a, b) =>
          a.mark > b.mark ? a : b
        )
      : null;

  return (
    <div className="dashboard">

      <h1>🎓 Student Management System</h1>

      <input
        className="search-box"
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="stats">

        <div className="card blue">
          <h3>Total Students</h3>
          <h1>{totalStudents}</h1>
        </div>

        <div className="card green">
          <h3>Average Mark</h3>
          <h1>{averageMark}</h1>
        </div>

        <div className="card orange">
          <h3>Topper</h3>
          <h2>{topper?.name}</h2>
        </div>

        <div className="card purple">
          <h3>Highest Mark</h3>
          <h1>{topper?.mark}</h1>
        </div>

      </div>

      <div className="student-form">

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) =>
            setCourse(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Mark"
          value={mark}
          onChange={(e) =>
            setMark(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Attendance %"
          value={attendance}
          onChange={(e) =>
            setAttendance(e.target.value)
          }
        />

        <button onClick={addStudent}>
          {editId
            ? "Update Student"
            : "Add Student"}
        </button>

      </div>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Mark</th>
            <th>Attendance</th>
            <th>Status</th>
            <th>Rank</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredStudents.map(
            (student, index) => (
              <tr key={student.id}>

                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.course}</td>

                <td>{student.mark}</td>

                <td>
                  {student.attendance}%
                </td>

                <td>
                  {student.mark >= 35
                    ? "Pass"
                    : "Fail"}
                </td>

                <td>
                  #{index + 1}
                </td>

                <td>

                  <button
                    onClick={() =>
                      editStudent(student)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteStudent(student.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default Dashboard;