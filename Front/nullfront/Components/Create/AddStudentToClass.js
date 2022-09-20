import { useState } from "react";



export default function AddStudentToClass(props){

    const [name, setName] = useState("jens")
    const [phoneNumber, setPhoneNumber] = useState("phonenumber")
    const [link, setLink] = useState("_LINKPACEHOLDER_")

    let [To, setTo] = useState("+4790173862")
    const [From, setFrom] = useState("+18145643389")

    async function HandleAddStudent(event){

        if (phoneNumber.length !== 11) {
            return alert("Feil format på telefonnummeret...") }

        event.preventDefault()

        const response = await fetch (`https://localhost:7212/api/schoolclasses/${props.id}/students/${name}/${phoneNumber}/${link}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json'},
        })

        if (response.ok) {
            console.log("ok")
            console.log(response)
            HandleSendSMS()
            return response
        }
        else {
            console.log("response error")
        }
    }

    const HandleSendSMS = async () => {

        To.split(" ").join("")
        
        const Message = `Hei ${name}! Du har fått en bruker på nullstress.no. Link: ${link}`
        const sms = { To, From, Message }

        console.log(To)
        console.log(From)
        console.log(Message)

        // event.preventDefault()

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
            <form>
                <label>
                    Add student:
                    <input value={name} onChange={event => setName(event.target.value)} type="Text"></input>
                    <input value={To} placeholder="+47 81549300" onChange={event => setPhoneNumber(event.target.value)} type="Number" ></input>
                </label>
                <button type="submit" onClick={HandleAddStudent}>Add</button>
            </form>
        </div>






    )


}

   

   

  

   

 
