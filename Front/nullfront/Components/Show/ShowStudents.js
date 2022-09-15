import { useEffect, useState } from "react";
import React from 'react'
import Link from "next/link";

export default function ShowStudents() {
    const getStudents = async () => {
        
        const endpoint = "https://localhost:7212/api/students"

        const response = await fetch(endpoint).catch(error => {
            console.log(error)
            throw error
        })

        if (response.ok){
            return await response.json()
        }

        else {
            console.log(response)
        }
    }

    const [students, setStudents] = useState([])

     useEffect(() => {
         getStudents()
         .then(students => setStudents(students))
     }, [])

    return (
        <div>
            Here are the student names:
            <div key={students.id}>
                {students.map((student) => (
                    <li key={student.id}><Link href={"/Elevside"}>{student.name}</Link></li>
                ))}
            </div>
        </div>
    )}
