
import { useState } from "react";

export default function AddStudent(){

    const [name, setName] = useState("")
   
    async function HandleAddStudent(event){
       const student = {name}
       
        
        event.preventDefault()
        const response = await fetch("https://localhost:7212/api/students", {
            method: "POST", 
            body: JSON.stringify(student),
            headers: {
                "content-Type" : "application/json"
            }          
        })
        return response
    }

    return (
            <form>
                <label>
                <p>Add student</p>
                Student name:
                <input value={name} onChange={event => setName(event.target.value)}type="Text"></input>
                </label>
                <button type="submit" onClick={HandleAddStudent}>Add student</button>
            </form>
    )

}

//TO DO: Legge til schoolClass. Lage et input field for dette