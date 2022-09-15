import { useEffect, useState } from "react";
import React from 'react'
import Link from "next/link";

export default function ShowClasses() {
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
            <div key={schoolClass.id}>
                {schoolClasses.map((schoolClass) => (
                    
                    <a href={schoolClass.id}><li key={schoolClass.id}>{schoolClass.name}</li></a>
                    
                    ))}
            </div>
        </div>
    )
}