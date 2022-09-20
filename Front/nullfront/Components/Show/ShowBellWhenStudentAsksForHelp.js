import { useEffect, useState } from "react";
import React from 'react'
import ShowStudents from "./ShowStudents";

export default function ShowBellWhenStudentAsksForHelpoutAdminProfile(props) {

    const getStudentInfo = async () => {
        const endpoint = `https://localhost:7212/api/students/ac439b23-39f5-4809-5b45-08da9aeec92d`

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
            }


    }, [])

    function RenderBellIcon() {

        if (student.needshelp === true) {
            // console.log("accessing true bell")

            return (
                <div>
                <img
                   draggable="false"
                   alt="image"
                   src="/bell_red.png"
                   height="40"
                   width="40"
                   
                   onClick={e => HandleRemoveHelpWantedFlag(props.id)}
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
    
        const response = await fetch(`https://localhost:7212/api/students/untrue/ac439b23-39f5-4809-5b45-08da9aeec92d`, {
          method: "PUT",
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