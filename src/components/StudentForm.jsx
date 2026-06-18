import { useState } from "react";

function StudentForm({ addStudent }) {
const [name, setName] = useState("");
const [mark, setMark] = useState("");

const handleSubmit = (e) => {
e.preventDefault();


const student = {
  id: "STU" + Date.now(),
  name,
  mark: Number(mark),
};

addStudent(student);

setName("");
setMark("");


};

return ( <form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Student Name"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>


  <input
    type="number"
    placeholder="Student Mark"
    value={mark}
    onChange={(e) => setMark(e.target.value)}
    required
  />

  <button type="submit">
    Add Student
  </button>
</form>
);
}

export default StudentForm;
