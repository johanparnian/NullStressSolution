import { useEffect, useState } from "react";
import React from 'react'

export default function ShowMoods(props) {
    console.log(props.moods)

    if (!props.moods) {
        return <></>
    }
    
    return (
        <div>
            List of moods
            {props.moods.map((moodz) => (
                <div key={moodz.id}>
                    <li key={moodz.id}>{moodz.muud}</li>                                 
                </div>
            )
            )}
           
        </div>
    )}
                
