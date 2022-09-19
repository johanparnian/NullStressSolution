import { useEffect, useState } from "react";
import React from 'react'


export default function ShowStudents(props) {
    console.log(props.students)

    if (!props.students) {
        return <></>
    }

    return (
        <div>
            List of students:
            {props.students.map((ztudents) => (
                <div key={ztudents.id}>
                    <a href={`Student/${ztudents.id}`}><li key={ztudents.id}>{ztudents.name}</li></a>
                </div>
            ))}
        </div>
    )
}
