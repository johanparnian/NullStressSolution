import { useEffect, useState } from "react";
import React from 'react'


export default function ShowStudents(props) {
    //     const getStudents = async () => {

    //         const endpoint = `https://localhost:7212/api/Students
    // `

    //         const response = await fetch(endpoint).catch(error => {
    //             console.log(error)
    //             throw error
    //         })

    //         if (response.ok) {
    //             return await response.json()
    //         }

    //         else {
    //             console.log(response)
    //         }
    //     }

    //     const [students, setStudents] = useState([])

    //      useEffect(() => {
    //          getStudents().then(students => setStudents(students))
    //      }, [])

    console.log(props.students)

    if (!props.students) {
        return <></>
    }

    return (
        <div>
            List of students:
            {props.students.map((ztudents) => (
                <div key={ztudents.id}>
                    <a href={`Student/${ztudents.id}`}><li key={ztudents.id}>{ztudents.name}</li></a>
                </div>
            ))}
        </div>
    )
}
