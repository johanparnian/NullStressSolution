import { useState } from "react";
import config from '@/lib/config'

export default function DeleteAndEditStudent(props) {
  const [name, setName] = useState(props.name);

  async function updateStudent(name) {
    const response = await fetch(
      `${config.apiBaseUrl}students/${props.id}`,
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
      `${config.apiBaseUrl}students` + "/" + props.id,
      { method: "DELETE" }
    );
    if (response.ok) {
      props.deleteStudentFromList(props.id);
      return response;
    }
    else {
      throw console.error("No such student found!");
  }
  }

  function AreYouSure() {
    if (confirm('Er du helt sikker på at du vil slette eleven?')) {
      deleteStudent()
    }
    else return false;
  }

  return (
    <>
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
    </>
  )
}

