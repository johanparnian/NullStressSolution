import { useState } from "react"

const PostCreateAdmin = async (data) => {
const response = await fetch ("URLHERE", { 
method: "POST",
headers: { 'Content-Type': 'application/json'},
body: JSON.stringify(data)
})
return response.json()
}

export default function CreateAdmin(props) {

const [Name, setName] = useState("")
const [School, setSchool] = useState("")


return (
        <form classname="creatingAdmin" onSubmit={
            (event) => {
                event.preventDefault()
                PostCreateAdmin({Name, School})
            }
        }>
            <div>
            <label>
                    <p>Add teacher Name</p>
                    <input type="text" value={Name} onChange={event => setName(event.target.value)}></input>
                    <p>Add school name:</p>
                    <input type="text" value={School} onChange={event => setSchool(event.target.value)}></input>
            </label>
            <br></br>
                <button type="submit">Add data</button>

            </div>
        </form>
    )}