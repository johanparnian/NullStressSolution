import { useEffect, useState } from "react";
import React from 'react'

export default function ShowMoods(props) {
    console.log(props.moods)

    var imagelink = "";

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
    return (
        <div>
            {/* {imagelink = "/1.png"} */}
            List of moods
            {props.moods.map((moodz) => (
                <div key={moodz.id}>
                    
                    <li key={moodz.id}>Humør: 
                    {/* {(() => 
                    {if (moodz.muud === '1') {
                       return (<img src="/1.png"/>)
                    } else {
                        return (<img src="/2.png"/>)
                    }
                    } ) } */}
                    {/* <img src={imagelink}></img> */}
                    {(() => {
                            if (moodz.muud === 1) {return (<p>Yo nr 1!</p>)}
                            else {return (<p>Ingenting å se her</p>)}
                        })} ---- Dato: {moodz.time}</li>    
                    {/* <li key={moodz.id}>Humør: {moodz.muud} ---- Dato: {moodz.time}</li>                                  */}
                </div>
            )
            )}
           
        </div>
    )}