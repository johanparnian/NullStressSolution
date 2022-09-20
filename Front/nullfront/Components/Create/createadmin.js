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
            <form>
                <div>
                    <label>
                        <div className="overskrift2">Legg til ny</div>
                            <p>Navn</p> 
                            <input type="text" value={Name} onChange={event => setName(event.target.value)}></input>
                    </label>
                    <br></br>
                    <label>
                            <p>Skole</p>
                            <input type="text" value={School} onChange={event => setSchool(event.target.value)}></input>
                    </label>
                            <button type="submit" onClick={HandleCreateAdmin}>Legg til ny lærer</button>
                </div>
            </form>
    )}
