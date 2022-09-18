import { useEffect, useState } from "react";
import React from 'react'

export default function ShowMoods() {
    const getMoods = async () => {
        
        const endpoint = "https://localhost:7212/api/moods/"

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

    const [moods, setMoods] = useState([])

     useEffect(() => {
         getMoods()
         .then(moods => setMoods(moods))
     }, [])

    return (
        <div>
            List of moods
            <div key={moods.id}>
                {moods.map((mood) => (
                    // <a href={`Students/${mood.id}`}><p key={mood.id}>{mood.muud}</p></a>
                    <p>{mood.muud}</p>
                    ))}
            </div>
        </div>
    )}
                
