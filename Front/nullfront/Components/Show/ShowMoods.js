import { useEffect, useState } from "react";
import React from 'react'

export default function ShowMoods(props) {
    console.log(props.moods)
    const [imagelink, setImagelink] = useState()

    if (!props.moods) {
        return <></>
    }
    // else if (props.moods == 1) {
    //     imagelink = "/1.png"
    // } else if (props.moods == 2)  {
    //     imagelink = "/2.png"
    // } else if (props.moods == 3) {
    //     imagelink = "/3.png"
    // } else if (props.moods == 4) {
    //     imagelink = "/4.png"
    // } else if (props.moods == 5) {
    //     imagelink = "/5.png"
    // }
    let verdi = 0
    let button = ""

    function Teller() {

        if (verdi === 1) {
            button = "/1.png"
        }
        if (verdi === 2) {
            button = "/2.png"
        }
        if (verdi === 3) {
            button = "/3.png"
        }
        if (verdi === 4) {
            button = "/4.png"
        }
        if (verdi === 5) {
            button = "/5.png"
        }
    }

    
    return (
        <div>
            List of moods
            {props.moods.map((moodz) => (
                <div key={moodz.id}>
                    <li hidden="hidden" key={moodz.id}>{verdi = moodz.muud}
                        ---- </li>
                    {Teller()}
                    <img height="50" src={button} /><>Dato: {tid = moodz.time}{nytid}</>
                </div>
            )
            )}
        </div>
    )
}