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
                            <p>Add teacher Name</p> 
                            <input type="text" value={Name} onChange={event => setName(event.target.value)}></input>
                    </label>
                    <br></br>
                    <label>
                            Add school name:
                            <input type="text" value={School} onChange={event => setSchool(event.target.value)}></input>
                    </label>
                    <label>
                            Add class name:
                            <input type="text" value={ClassName} onChange={event => setClassName(event.target.value)}></input>
                    </label>
                    <br></br>
                            <button type="submit" onClick={HandleCreateAdmin}>Add data</button>
                </div>
            </form>
    )}
