import { useEffect, useState } from "react";
import React from 'react'
import Link from "next/link";


export default function ShowStudents() {
    const getStudents = async () => {

        const endpoint = `https://localhost:7212/api/Students
`

        const response = await fetch(endpoint).catch(error => {
            console.log(error)
            throw error
        })

        if (response.ok) {
            return await response.json()
        }

        else {
            console.log(response)
        }
    }

    const [students, setStudents] = useState([])

     useEffect(() => {
         getStudents().then(students => setStudents(students))
     }, [])

    return (
        <div>
            List of students
            <div key={students.id} >
                {students.map((student) => (
                    // <Link href="/Elevside">
                        <div className="student-card">
                            <a href={`Elevside/${student.id}`}><p key={student.id}>{student.name}</p></a>                                              
                        </div>
                    // </Link>
                    ))}
            </div>
        </div>
    )}
