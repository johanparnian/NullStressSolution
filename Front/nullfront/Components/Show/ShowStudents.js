import { useEffect, useState } from "react";
import React from 'react'


export default function ShowStudents(props) {
  const [studentName, setStudentName] = useState('');
  const [needshelp, setNeedshelp] = useState(false);
  // const [bell, setBell] = useState("/bell_black.png");


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
      return response;
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
      return response;
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
      return response;
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
      <div className="overskrift2">Rediger elever</div>
      {props.students.map((ztudents) => (
        <>
        
        <div key={ztudents.id}>
        <div className="svartramme">
          <a href={`Student/${ztudents.id}`}><p className="overskrift2" key={ztudents.id}>{ztudents.name}{ztudents.id}</p></a>
          <p>før</p>
            <img src={ztudents.imageUrl} type="submit" onClick={() => updateNeedhelp(needshelp, ztudents.id)}  />
          <p>etter</p>
          <div>
            <input
              placeholder="Rediger navn..."
              onChange={(event) => setStudentName(event.target.value)}
            />
            <button type="submit" onClick={() => updateStudent(studentName, ztudents.id)}>Lagre</button>
            &ensp;
            <button src="user.png" id="deletebutton" onClick={() => AreYouSure(ztudents.id)}>Slett</button>
            </div>
          </div>
        </div>
        </>
      ))}
    </div>
  )
}
