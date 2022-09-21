import React from 'react'
import Link from "next/link";

export default function ShowAdmins(props) {
    const { admins } = props

    return (
        <>
            <div className="overskrift2">Velg lærer</div>
            <div key={admins.id}>
                <br></br>
                {admins.map((admin) => (
                    <>
                    <div className="linker">
                        <Link href={`Admin/${admin.id}`}><a key={admin.id}>{admin.name}</a></Link>
                    </div>
                    </>
                    ))}
                    
            </div>
        </>
    )
}