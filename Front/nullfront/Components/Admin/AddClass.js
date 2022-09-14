import { useState } from "react";

export default function AddClass() {
    const [schoolClassName, setSchoolClassName] = useState("")


    async function HandleCreateStudent(event, schoolClassName) {
        event.preventDefault()

        const response = await fetch(`https://localhost:7212/api/admins/1/SchoolClass/${schoolClassName}`, {
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
                <label>
                    Create class:
                    <input value={schoolClassName} onChange={event => setSchoolClassName(event.target.value)} type="Text"></input>
                </label>
                
                <button type="submit" onClick={HandleCreateStudent}>Add</button>
            </form>
        </div>
    )

}
