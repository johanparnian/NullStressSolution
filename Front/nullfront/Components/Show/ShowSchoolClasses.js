import { useEffect, useState } from "react";
import React from 'react'

export default function ShowSchoolClasses(props) {

    console.log(props.classes)

    if (!props.classes) {
        return <></>
    }

    return (
        <div>
            <h3>Dine registrerte klasser:</h3>
            {props.classes.map((clazz) => (
                <div key={clazz.id}>
                    <a href={`Classes/${clazz.id}`}><li key={clazz.id}>{clazz.schoolClassName}</li></a>
                </div>
            ))}
        </div>
    )
}