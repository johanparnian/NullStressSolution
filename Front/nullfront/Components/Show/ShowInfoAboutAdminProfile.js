//Presently only gets admin ID 1.

import { useEffect, useState } from "react";
import React from 'react'

export default function ShowInfoAboutAdminProfile() {

    const getAdminInfo = async () => {
        const endpoint = "https://localhost:7212/api/admins/1"

        const response = await fetch(endpoint)

        if (response.ok) {
            console.log("admin name GET worked!")
            return await response.json();
        }
        else {
            console.log("ERROR: Admin name get.")
            console.log(response)
        }
    }

    const [admin, setAdmin] = useState([])
         useEffect(() => {
            getAdminInfo()
            .then(admin => setAdmin(admin))
     }, [])


    return (
        <div>
            <p>Innlogget som: {admin.name}</p>
            <p>Tilhørende skole: {admin.school}</p>
            <p>Tilhørende klasse: {admin.ClassName}</p>
        </div>
    )
}