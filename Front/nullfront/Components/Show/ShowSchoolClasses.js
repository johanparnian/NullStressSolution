import { useEffect, useState } from "react";
import React from 'react'

export default function ShowSchoolClasses(props) {
    // const getClasses = async () => {

    //     const endpoint = `https://localhost:7212/api/admin/1`

    //     const response = await fetch(endpoint).catch(error => {
    //         console.log(error)
    //         throw error
    //     })

    //     if (response.ok) {
    //         return await response.json()
    //     }

    //     else {
    //         console.log(response)
    //     }
    // }

    // const [schoolClasses, setSchoolClasses] = useState([])

    // useEffect(() => {
    //     getClasses()
    //         .then(classes => setSchoolClasses(classes))
    // }, [])

    console.log(props.classes)

    if (!props.classes) {
        return <></>
    }

    return (
        <div>
            List of classes:
            {props.classes.map((clazz) => (
                <div key={clazz.id}>
                    <a href={`Classes/${clazz.id}`}><li key={clazz.id}>{clazz.schoolClassName}</li></a>
                </div>
            ))}
        </div>
    )
}