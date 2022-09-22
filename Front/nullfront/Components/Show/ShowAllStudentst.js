import { useEffect, useState } from "react";
import React from 'react'
import config from '@/lib/config'

export default function ShowAllStudents() {
    const getStudents = async () => {

        const endpoint = `${config.apiBaseUrl}students`

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
        getStudents()
            .then(students => setStudents(students))
    }, [])

    return (
        <div>
            List of students:
            <div key={students.id}>
                {students.map((students) => (
                    <a href={`Students/${students.id}`}><li key={students.id}>{students.name}</li></a>
                    ))}
            </div>
        </div>
    )
}