// import { useEffect, useState } from "react";
// import React from 'react'

// export default function ShowStudentMood() {
//     const getStudents = async () => {
        
//         const endpoint = "https://localhost:7212/api/students"

//         const response = await fetch(endpoint).catch(error => {
//             console.log(error)
//             throw error
//         })

//         if (response.ok) {
//             return await response.json()
//         }

//         else {
//             console.log(response)
//         }
//     }

//     const [studentMood, setStudentMood] = useState([])
//     useEffect(() => {
//         getStudents()
//             .then(students => setStudentMood(students))
//     }, [])

//     return (
//         <div>
            
//         </div>

//     )

//     }

//     //  useEffect(() => {
//     //      getStudents()
//     //      .then(students => setStudents(students))
//     //  }, [])

//     // return (
//     //     <div>
//     //         Here is the last registered mood:
//     //         <div key={students.id}>
//     //             {students.map((student) => (
//     //                 <li key={student.id}>{student.name}</li>
//     //             ))}
//     //         </div>
//     //     </div>
//     // )}