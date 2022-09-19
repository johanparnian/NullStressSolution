
import React from "react"
import { Bar } from "react-chartjs-2"


export default function BarChar(){


    return (
        <div>
            <Bar
            data={{
                labels: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag']
            }}
            height={400}
            width={600}
            ></Bar>
        </div>
    )
}