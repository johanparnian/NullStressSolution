import { useState } from "react"

export default function CreateAdmin(props) {

    const { onCreateAdmin } = props

    const [Name, setName] = useState("")
    const [School, setSchool] = useState("")

    const handleCreateAdmin = async e => {
        await onCreateAdmin(e, {Name, School})
        setName("")
        setSchool("")
    }

    return (
        <>
            <div className="overskrift2">Legg til ny lærer</div>
            <input type="text" placeholder="Navn" value={Name} onChange={event => setName(event.target.value)}></input>
            <input type="text" placeholder="Skole" value={School} onChange={event => setSchool(event.target.value)}></input>
            <br></br>
            <button type="submit" onClick={handleCreateAdmin}>Legg til</button>
        </>
    )}
