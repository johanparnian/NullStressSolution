import { useEffect, useState } from "react";
import React from 'react'
import ShowStudents from "./ShowStudents";
import config from '@/lib/config'

export default function ShowBellWhenStudentAsksForHelpoutAdminProfile() {

    const getStudentInfo = async () => {
        const endpoint = `${config.apiBaseUrl}students/1`

        const response = await fetch(endpoint)

        if (response.ok) {
            console.log("student GET worked!")
            RenderBellIcon()
            return await response.json();
        }
        else {
            throw console.error("No such student found!");
        }
    }






    const [student, setStudent] = useState("")

    useEffect(() => {
        getStudentInfo()
            .then(student => setStudent(student))

            if (student.needshelp === true) {
                console.log(student.needshelp)
                RenderBellIcon()
            }


    }, [])

    function RenderBellIcon() {

        if (student.needshelp === true) {
            console.log("accessing true bell")

            return (
                <div>
                <img
                   draggable="false"
                   alt="image"
                   src="/bell_red.png"
                   height="40"
                   width="40"
                   
                   onClick={HandleRemoveHelpWantedFlag}
               ></img>
           </div>
            )
        }
        else if (student.needshelp === false) {
            console.log("accessing false bell")
            return (
                <div>
                <img
                   draggable="false"
                   alt="image"
                   src="/bell_black.png"
                   height="40"
                   width="40"
               ></img>
           </div>
            )

        }
    }


    async function HandleRemoveHelpWantedFlag(event, props) {
        event.preventDefault()
    
        const response = await fetch(`${config.apiBaseUrl}students/${1}/removehelprequest`, {
          method: "GET",
          headers: { 'Content-Type': 'application/json' }
        }
        )
        if (response.ok) {
          console.log("OK To remove help wanted flag")

          
          
        }
        else {
            return 
        }
      }

    return (
        <div>
            {RenderBellIcon()}
            <p></p>
        </div>
    )
}