import { useState } from "react";

export default function AddStudentToClass(props){

    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [link, setLink] = useState("_LINKPACEHOLDER_")
    
    // let [To, setTo] = useState("+4790173862")
    let To = phoneNumber
    
    const From = "+18145643389"

    async function HandleAddStudent(event){

        if (phoneNumber.length !== 11) {
            console.log(phoneNumber.length)
            return alert("Feil format på telefonnummeret...") }

        event.preventDefault()

        const response = await fetch (`https://localhost:7212/api/schoolclasses/${props.id}/students/${name}/${phoneNumber}/${link}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json'},
        })

        if (response.ok) {
            HandleSendSMS()
            return response
        }
        else {
            throw console.error("Response error...");
        }
    }

    const HandleSendSMS = async () => {

        To.split(" ").join("")
        
        const Message = `Hei ${name}! Du har fått en bruker til Null Stress. Link: ://localhost:3000/StudentPage/${props.id}`
        const sms = { To, From, Message }

        const endpoint = "https://localhost:7212/sms"
        
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sms)
        })
        if (response.ok) {
            console.log("sms response ok!")
            return response
        }
        else console.log("error in SMS get")
    }

    return(
        <div>
                      <div className="overskrift2">Legg til ny elev</div>
                      <br></br>
            <form>
                <label>
                    <input value={name} placeholder="Navn" onChange={event => setName(event.target.value)} type="Text"></input>

                    <input value={phoneNumber} placeholder="+47 81549300" onChange={event => setPhoneNumber(event.target.value)}></input>

                </label>
                <button type="submit" onClick={HandleAddStudent}>Legg til og send SMS</button>
            </form>
        </div>
    )
}

   

   

  

   

 
