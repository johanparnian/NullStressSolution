import { useState } from "react";

export default function DeleteAndEditStudent(props) {
  const [name, setName] = useState(props.name);

  async function updateStudent(name) {
    const response = await fetch(
      `https://localhost:7212/api/students/${props.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      }
    )
    if (response.ok) {
      props.updateStudentFromList(name, props.id);
      return response;
    }
  }

  async function deleteStudent() {
    const response = await fetch(
      `https://localhost:7212/api/students` + "/" + props.id,
      { method: "DELETE" }
    );
    if (response.ok) {
      props.deleteStudentFromList(props.id);
      return response;
    }
  }

  return (
    <div>
      <input
        placeholder="Skriv inn elevens nye navn"
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit" onClick={() => updateStudent(name)}>
        Edit
      </button>
      <button onClick={() => deleteStudent()}>Delete</button>
    </div>
  )
}