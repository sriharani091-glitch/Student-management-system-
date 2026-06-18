function StudentTable({
students,
deleteStudent
}) {

const getGrade = (mark) => {
if (mark >= 90) return "A+";
if (mark >= 75) return "A";
if (mark >= 60) return "B";
if (mark >= 35) return "C";
return "F";
};

return ( <table>

  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Mark</th>
      <th>Grade</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>

    {students.map((student) => (

      <tr key={student.id}>

        <td>{student.id}</td>

        <td>{student.name}</td>

        <td>{student.mark}</td>

        <td>
          {getGrade(student.mark)}
        </td>

        <td>

          <span
            className={
              student.mark >= 35
                ? "pass"
                : "fail"
            }
          >
            {student.mark >= 35
              ? "Pass"
              : "Fail"}
          </span>

        </td>

        <td>

          <button
            onClick={() =>
              deleteStudent(student.id)
            }
          >
            Delete
          </button>

        </td>

      </tr>

    ))}

  </tbody>

</table>

);
}

export default StudentTable;
