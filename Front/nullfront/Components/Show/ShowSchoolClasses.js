import { useEffect, useState } from "react";
import React from 'react'
import Link from "next/link";

export default function ShowSchoolClasses(props) {
    
    console.log(props.classes)

    if (!props.classes) {
        return <></>
    }
    return (
        <>
                            <div className="svartramme">

                <div className="overskrift2">Dine klasser</div>
                
                {props.classes.map((clazz) => (
                    <>
                        <div key={clazz.id}>
                            <div className="linker">
                                <Link className="nav-link" a href={`Classes/${clazz.id}`} key={clazz.id}>{clazz.schoolClassName}</Link>
                            </div>
                        </div>
                    </>
                ))}
                </div>
        </>
    )
}