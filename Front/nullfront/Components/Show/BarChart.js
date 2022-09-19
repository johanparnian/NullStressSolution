// import React from "react"


// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     Filler,} from "chart.js";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Filler,
//     Tooltip,
//     Legend,
//     Bar
// );

// import { Bar } from "react-chartjs-2";
// import { redirect } from "next/dist/server/api-utils";



// export default function BarChart(){

//     const data = {
//         labels:[
//             "Mandag",
//             "Tirsdag",
//             "Onsdag",
//             "Torsdag",
//             "Fredag",
//         ],
//     datasets: [
//         {
//             label: "{navn}s humør denne uken",
//             borderRadius: 30,
//             data: [1, 4, 2, 5, 3],
//             backgroundColor: "red",
//             barTghickness: 10,

//         },
//         {
//             label: "Klassend gjennomsnitt denne uken",
//             borderRadius: 30,
//             data: [2, 4, 4, 1, 2],
//             backgroundColor: "red",
//             barTghickness: 10,
//         },
//     ],
//     };

//     return (
//         <div>

//             <Bar data={data}
//             height={300}
//             options={options}>


//             </Bar>


          



//         </div>
//     )
// }


//   {/* <Bar
//             data={{
//                 labels: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'],
//                 datasets: [
//                     {
//                         label: "Humær denne uken",
//                         data: [1,4,3,2,5],
//                         borderColor: "red",   
//                     }
//                 ]

//             }}
//             height={400}
//             width={600}
//             options={{
//                 maintainAspectRatio: false,
//                 scales:{
//                     yAxes: [
//                         {
//                             ticks: {
//                                 beginAtZero: true,
//                             },
//                         },
//                     ],
//                 },

//             }}
//             ></Bar> */}