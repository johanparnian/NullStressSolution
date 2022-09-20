import { useEffect, useState } from "react";
import React from 'react'


export default function ShowStudents(props) {
    const [studentName, setStudentName] = useState('');

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

    if (!props.students || props.students.length < 0) {
        return (
            <>
                <p>
                    Error melding...
                </p>
            </>
        );
    }

    return (
        <div>
            List of students:
            {props.students.map((ztudents) => (
                <div key={ztudents.id}>
                    <a href={`Student/${ztudents.id}`}><li key={ztudents.id}>{ztudents.name}</li></a>

                    <div>
                        <input
                            placeholder="Rediger navn..."
                            onChange={(event) => setStudentName(event.target.value)}
                        />
                        &ensp;
                        <button type="submit" onClick={() => updateStudent(studentName, ztudents.id)}>Lagre</button>
                        &ensp;
                        <button src="user.png" id="deletebutton" onClick={() => AreYouSure(ztudents.id)}>Slett</button>
                        <hr></hr>
                    </div>
                </div>
            ))}
        </div>
    )
}
