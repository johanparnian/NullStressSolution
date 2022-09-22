// // import * as ss from 'simple-statistics'
// // import {min} from 'simple-statistics'
// //     // var ss = require('simple-statistics')

// import { useEffect, useState } from "react";
// import React from 'react'

// export default function ShowStudentsStatistics() {

//     const [statistics, setStatistics] = useState([])

//     async function getStatistics(){

//         const endpoint = "${config.apiBaseUrl}moods/"

//         const response = await fetch(endpoint).catch(error => {
//             console.log(error)
//             throw error
//         })

//         if (response.ok){
//             return await response.json()
//         }

//         else {
//             console.log(response)
//         }
//     }
    

//      useEffect(() => {
//         getStatistics()
//          .then(statistics => setStatistics(statistics))
//      }, [])

    // return (
    //     <div>
    //         List of moods
    //         <div key={moods.id}>
    //             {moods.map((mood) => (
    //                 <a href={`Students/${mood.id}`}><li key={mood.id}>{mood.muud}</li></a>
    //                 ))}
    //         </div>
    //     </div>
    // )