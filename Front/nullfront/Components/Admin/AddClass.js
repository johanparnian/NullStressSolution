import { useState } from "react";

export default function AddClass() {
    const [ClassName, setClassName] = useState("")


    async function HandleCreateStudent(event, ClassName) {
        event.preventDefault()

        const response = await fetch(`https://localhost:7212/api/Admins/${id}/mood/${ClassName}`, {
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
                    <input value={ClassName} onChange={event => setClassName(event.target.value)} type="Text"></input>
                </label>
                <button type="submit" onClick={HandleCreateStudent}>Add</button>
            </form>
        </div>
    )

}
