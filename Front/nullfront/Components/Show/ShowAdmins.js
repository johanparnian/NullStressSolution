import React from 'react'
import Link from "next/link";

export default function ShowAdmins(props) {
    const { admins } = props

    return (
      
        <><br></br><br></br>
            <div className="overskrift3"><p>Velg lærer</p></div>
            <div className='svartramme'>
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
            </div>
        </>
        
    )
}