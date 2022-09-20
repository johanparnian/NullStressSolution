import { useEffect, useState } from "react";
import React from 'react'
import Link from "next/link";

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
        <>
            <div className="overskrift2">Velg lærer</div>
            <div key={admins.id}>
                <br></br>
                {admins.map((admin) => (
                    <>
                    <br></br>
                    <Link className="nav-item" href={`Admin/${admin.id}`}><a key={admin.id} className="nav-link mx-">{admin.name}</a></Link>
                    <br></br>
                    </>
                    ))}
                    
            </div>
        </>
    )
}