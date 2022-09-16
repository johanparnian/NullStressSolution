import { useEffect, useState } from "react";
import React from 'react'

export default function ShowAdmins() {
    const getAdmins = async () => {

        const endpoint = "https://localhost:7212/api/admins"

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

    const [admins, setAdmins] = useState([])

    useEffect(() => {
        getAdmins()
            .then(admins => setAdmins(admins))
    }, [])

    return (
        <div>
            List of admins:
            <div key={admins.id}>
                {admins.map((admin) => (
                    <a href={`Admin/${admin.id}`}><li key={admin.id}>{admin.name}</li></a>
                    
                    ))}
            </div>
        </div>
    )
}