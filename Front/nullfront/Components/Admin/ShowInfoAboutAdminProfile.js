//Presently only gets admin ID 1.

import { useEffect, useState } from "react";
import React from 'react'

export default function ShowInfoAboutAdminProfile() {

    const getAdminInfo = async () => {
        const endpoint = "https://localhost:7212/api/admins/"

        const response = await fetch(endpoint)

        if (response.ok) {
            console.log("it worked")
            return await response.json();
        }
        else {
            console.log("didnt work")
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
            {admin.name}{admin.school}{admin.className}
        </div>
    )
}