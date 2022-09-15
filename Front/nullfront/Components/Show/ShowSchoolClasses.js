import { useEffect, useState } from "react";
import React from 'react'

export default function ShowSchoolClasses() {
    const getClasses = async () => {

        const endpoint = "https://localhost:7212/api/schoolclasses"

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

    const [schoolClasses, setSchoolClasses] = useState([])

    useEffect(() => {
        getClasses()
            .then(classes => setSchoolClasses(classes))
    }, [])

    return (
        <div>
            List of classes:
            <div key={schoolClasses.id}>
                {schoolClasses.map((schoolClass) => (
                    <a href={`Classes/${schoolClass.id}`}><li key={schoolClass.id}>{schoolClass.schoolClassName}</li></a>
                    ))}
            </div>
        </div>
    )
}