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

  function AreYouSure() {
    if (confirm('Er du helt sikker på at du vil slette eleven?')) {
      deleteStudent()
    }
    else return false;
  }

  return (
    <div>
      <input
        placeholder="Rediger navn..."
        onChange={(event) => setName(event.target.value)}
      />
      &ensp;
      <button type="submit" onClick={() => updateStudent(name)}>
        Lagre
      </button>
      &ensp;
      <button src="/user.png" id="deletebutton" onClick={() => AreYouSure()}>Slett</button>
      <hr></hr>
    </div>
    
  )
}

