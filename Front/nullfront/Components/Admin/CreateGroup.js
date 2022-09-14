
import { useState } from "react";

export default function AddGroup(){

    const [SchoolClassName, setSchoolClassName] = useState("")
   
    async function HandleAddGroup(event){
       const group = {SchoolClassName}
       
        
        event.preventDefault()
        const response = await fetch("https://localhost:7212/api/SchoolClasses", {
            method: "POST", 
            body: JSON.stringify(group),
            headers: {
                "content-Type" : "application/json"
            }          
        })
        return response
    }

    return (
            <form>
                <label>
                Add a school class name:
                <input value={SchoolClassName} onChange={event => setSchoolClassName(event.target.value)}type="Text"></input>
                </label>
                <button type="submit" onClick={HandleAddGroup}>Add</button>
            </form>
    )

}

//TO DO: Legge til schoolClass. Lage et input field for dette