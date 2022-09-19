import { useState } from "react";

export default function AddStudentToClass(props){

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [link, setLink] = useState("_LINKPACEHOLDER_")

    let To = phoneNumber;
    

    async function HandleAddStudent(event){
        event.preventDefault()

        const student = {props, name, phoneNumber, link}

        const response = await fetch (`https://localhost:7212/api/schoolclasses/${props.id}/students/${name}/${phoneNumber}/${link}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(student)
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
                    <input value={To} placeholder="+47 81549300" onChange={event => setPhoneNumber(event.target.value)} type="Number"></input>
                </label>
                
                
                <button type="submit" onClick={HandleAddStudent}>Add</button>
            </form>
        </div>






    )


}

   

   

  

   

 
