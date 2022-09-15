import { useEffect, useState } from "react";
import React from 'react'
import Link from "next/link";

export default function ShowStudents() {
    
    const [students, setStudents] = useState([])
    const [moods, setMoods] = useState([])

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

    const getMoods = async () => {
        const endpoint = "https://localhost:7212/api/Moods"

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


     useEffect(() => {
         getStudents().then(students => setStudents(students))
         getMoods().then(moods => setMoods(moods) )
     }, [])

    return (
        <div>
            Here are the student names:
            <div>                           
                {students.map((student) => (
                    <Link href={"/Elevside"}>
                        <div className="student-card">
                            <h3 key={student.id}>{student.name}</h3>
                            <p>Foreløpig vises alle mood. Kommer ikke videre her, før vi får til kobling av view av elev til en spesifik id. </p>
                            {moods.map((mood) => (
                                <div>
                                    <p key={mood.student}>{mood.muud}</p>
                                    {/* <img className="img-student-card" href="1.png" />                                     */}
                                </div>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )}
