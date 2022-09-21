import { useEffect, useState } from "react";
import React from 'react'


export default function ShowStudents(props) {
  const [studentName, setStudentName] = useState('');
  const [needshelp, setNeedshelp] = useState(false);

  const { mutate } = props


  function AreYouSure(id) {
    if (confirm('Er du helt sikker på at du vil slette eleven?')) {
      deleteStudent(id)
    }
    else return false;
  }

  async function deleteStudent(id) {
    const response = await fetch(
      `https://localhost:7212/api/students` + "/" + id,
      { method: "DELETE" }
    );
    if (response.ok) {
      mutate()
    }
  }

  async function updateStudent(studentName, id) {
    const response = await fetch(
      `https://localhost:7212/api/students/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: studentName,
        }),
      }
    )
    if (response.ok) {
      setStudentName("")
      mutate()
    }
  }

  async function updateNeedhelp(needshelp, id) {

    const response = await fetch(
      `https://localhost:7212/api/students/false/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          needshelp: needshelp
        }),
      }
    )
    if (response.ok) {
      mutate()
    }
  }

  if (!props.students || props.students.length < 0) {
    return (
      <>
        <p>
          Vises under lasting eller ved feil
        </p>
      </>
    );
  }

  return (
    <div>
      <div className="overskrift2">Elever</div>
      <br></br>
      {props.students.map((ztudents) => (
        <div className="svartramme" key={ztudents.id}>


          <div className="bjellenavn">
          <img height="40" src={ztudents.imageUrl} type="submit" onClick={() => updateNeedhelp(needshelp, ztudents.id)}  /> &nbsp;&nbsp;&nbsp;
          <a href={`Student/${ztudents.id}`}><p className="overskrift4" key={ztudents.id}>{ztudents.name}</p></a>
          </div>

          <div>
            <input
              placeholder="Rediger navn..."
              onChange={(event) => setStudentName(event.target.value)}
            />
            <button type="submit" onClick={() => updateStudent(studentName, ztudents.id)}>Lagre nytt navn</button>
            &ensp;&ensp;
            <button src="user.png" id="deletebutton" onClick={() => AreYouSure(ztudents.id)}>Slett elev</button>
          </div>
          <b>ID / Link:</b> {ztudents.id}
        </div>
      ))}
    </div>
  )
}

