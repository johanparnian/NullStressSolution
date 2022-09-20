import { useState } from "react";

export default function CreateClass(props) {
    const [schoolClassName, setSchoolClassName] = useState("")

    async function HandleCreateStudent(event) {
        event.preventDefault()

        const response = await fetch(`https://localhost:7212/api/admins/${props.id}/SchoolClass/${schoolClassName}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            console.log("ok")
            return response
        }
        else {
            console.log("response error")
        }
    }

    return (
        <div>
            <form>
                    <div className="overskrift2">Ny skoleklasse</div>
                    &ensp;
                    <input placeholder="Navn..." value={schoolClassName} onChange={event => setSchoolClassName(event.target.value)} type="Text"></input>
                    
                <button type="submit" onClick={HandleCreateStudent}>Lagre</button>
            </form>
        </div>
    )

}
