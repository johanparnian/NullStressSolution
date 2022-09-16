import { useState } from "react";

export default function AddStudentToClass(props){
    const [name, setName] = useState("")

    async function HandleAddStudent(event){
        event.preventDefault()

        const response = await fetch (`https://localhost:7212/api/schoolclasses/${props.id}/students/${name}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json'},
        })

        if (response.ok) {
            console.log("ok")
            return response
        }
        else {
            console.log("response error")
        }
    }

    return(
        <div>
            <form>
                <label>
                    Add student:
                    <input value={name} onChange={event => setName(event.target.value)} type="Text"></input>
                </label>
                
                <button type="submit" onClick={HandleAddStudent}>Add</button>
            </form>
        </div>






    )


}

   

   

  

   

 
