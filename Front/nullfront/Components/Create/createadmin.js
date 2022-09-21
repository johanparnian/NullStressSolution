import { useState } from "react"

export default function CreateAdmin(props) {

    const [Name, setName] = useState("")
    const [School, setSchool] = useState("")
    const [ClassName, setClassName] = useState("")

    const HandleCreateAdmin = async (event) => {
        const admin = {Name, School, ClassName}

        event.preventDefault()
        const response = await fetch ('https://localhost:7212/api/admins', { 
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
        return response
        }

    return (
        <>
            <div className="overskrift3">Legg til ny lærer</div>
            <input type="text" placeholder="Navn" value={Name} onChange={event => setName(event.target.value)}></input>
            <input type="text" placeholder="Skole" value={School} onChange={event => setSchool(event.target.value)}></input>
            <br></br>
            <button type="submit" onClick={HandleCreateAdmin}>Legg til</button>
        </>
    )}
