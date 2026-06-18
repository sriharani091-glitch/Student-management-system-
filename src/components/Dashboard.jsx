function Dashboard({ students }) {
const totalStudents = students.length;

const passedStudents = students.filter(
(student) => student.mark >= 35
).length;

const averageMark =
totalStudents > 0
? (
students.reduce(
(sum, student) => sum + student.mark,
0
) / totalStudents
).toFixed(1)
: 0;

const topper =
students.length > 0
? students.reduce((prev, current) =>
prev.mark > current.mark
? prev
: current
)
: null;

return ( <div className="dashboard"> <div className="card"> <h3>Total Students</h3> <h1>{totalStudents}</h1> </div>

  <div className="card">
    <h3>Passed</h3>
    <h1>{passedStudents}</h1>
  </div>

  <div className="card">
    <h3>Average</h3>
    <h1>{averageMark}</h1>
  </div>

  <div className="card">
    <h3>Topper</h3>
    <h2>{topper ? topper.name : "N/A"}</h2>
  </div>
</div>
);
}

export default Dashboard;
