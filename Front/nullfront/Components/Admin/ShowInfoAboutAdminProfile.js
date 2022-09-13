
//Presently only gets admin ID 1.

import { useEffect, useState } from "react";
import React from 'react'

export default function ShowInfoAboutAdminProfile() {

    const getAdminInfo = async () => {
        const endpoint = "https://localhost:7212/api/admins/1"

        const response = await fetch(endpoint)

        if (response.ok) {
            return await response.json();
        }
        else {
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
            {admin.name},
            {admin.school},
            {admin.classname}.
        </div>
    )
}