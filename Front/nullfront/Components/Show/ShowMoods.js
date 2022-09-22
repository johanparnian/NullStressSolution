import { useEffect, useState } from "react";
import React from 'react'

export default function ShowMoods(props) {
    console.log(props.moods)
    const [imagelink, setImagelink] = useState()

    if (!props.moods) {
        return <></>
    }

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
let teller = 0;
let divider = 0;
let snitt;
    return (
        
        <div className="container">
            <div className="overskrift3">Humørregistreringer for eleven</div>

            <br></br><br></br><br></br>

            <div className="row">
                <div className="col-1" id="white"></div>
                <div className="col-1" id="white"></div>
                <div className="col-1" id="white"></div>

                <div className="col-1" id="white"></div>
                <div className="col">



                    <div className="svartramme">

                        <div className="center">

                            {props.moods.map((moodz) => (
                                <div key={moodz.id}>
                                    <li hidden="hidden" key={moodz.id}>{verdi = moodz.muud} {teller = teller + moodz.muud} {divider = divider +1} {teller = teller + moodz.muud} {divider = divider + 1} </li>
                                    {Teller()}
                    
                                    <img height="50" src={button} /><>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {moodz.time}</>
                                </div>
                
                                )
                                )}
                                <div hidden="hidden">
                                {snitt = teller / divider}
                                <br></br>
                                </div>
                                <br></br>

                                Gjennomsnitt score i skala 1-5<br></br>
                                <br></br>

                                 {snitt.toFixed(2)}
                                <br></br>
                                <br></br>

                                1 er dårligst humør
                                <br></br>
                                5 er best humør
                        </div>


                    </div>
                    <div className="col3"></div>

                </div>
                <div className="col-1" id="white"></div>
                <div className="col-1" id="white"></div>
                <div className="col-1" id="white"></div>
                <div className="col-1" id="white"></div>
            </div>
<div hidden="hidden">
                    snitt: {snitt = teller/divider}
    </div>
                
        </div>
    )
}