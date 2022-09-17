
import { useState } from "react";

export default function CreateStudentAndSendSMS() {

    const [From, setFrom] = useState("+18145643389")

    const [name, setName] = useState("")
    let [To, setTo] = useState("")
    const [link, setLink] = useState("_LINKPACEHOLDER_")

    const [phoneNumber, setPhoneNumber] = useState("")

    To = phoneNumber;
   
    async function HandleAddStudent(event) {
       const student = {name, phoneNumber, link}

        

       if (phoneNumber.length !== 11) {
        return alert("Feil format på telefonnummeret...")
       }
        
        event.preventDefault()
        const response = await fetch("https://localhost:7212/api/students", {
            method: "POST", 
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify(student),           
        })

        if (response.ok) {
            console.log("Added student fetch worked.!!")
            HandleSendSMS();
            return response
        }
        else
        {
            console.log("did not work..")
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
            console.log("response ok!")
            return response
        }
        else console.log("error in SMS get")
    }

    return (
            <form>
                <label>
                <p>Add student</p>
                Student name:
                <input value={name} placeholder="Navn" onChange={event => setName(event.target.value)} type="Text"></input>
            </label>
            <label>
                Phone Number:
                <input value={To} placeholder="+47 81549300" onChange={event => setPhoneNumber(event.target.value)} type="Text"></input>
            </label>
            <button type="submit" onClick={HandleAddStudent}>Add student</button>
        </form>
    )
}




















    //const [to, setTo] = useState("+47")
    //const [from, setFrom] = useState("+18145643389")


    // const HandleSendSMS = async (event) => {
    //     const sms = { to, from, message }

    //     event.preventDefault()
    //     const endpoint = "https://localhost:7212/sms"
        
    //     const response = await fetch(endpoint, {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(sms)
    //     })
    //     if (response.ok) {
    //         console.log("response ok!")
    //         return response
    //     }
    //     else console.log("error in SMS get")
    // }
