
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

        if (response.ok) {
            console.log("it worked!!")
            return response
        }
        else
        {
            console.log("did not work..")
        }  
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

