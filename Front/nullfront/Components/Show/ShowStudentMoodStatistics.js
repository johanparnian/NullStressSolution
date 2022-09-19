import { useEffect, useState } from "react";
import React from 'react'

export default function ShowStudentMoodStatistics() {

    const getStudentInfo = async () => {
        const endpoint = "https://localhost:7212/api/Students/1"
        const response = await fetch(endpoint)

        if (response.ok) {
            console.log("student GET worked!")
            return await response.json();
        }
        else {
            console.log("ERROR in student get.")
            console.log(response)
        }
    }

    const [student, setAdmin] = useState([])

         useEffect(() => {
            getStudentInfo()
            .then(student => setAdmin(student))
     }, [])


    return (
        <div>
            Student #1 heter <b>{student.name}</b>
            Her er alle mood registreringer:


        </div>
    )
}