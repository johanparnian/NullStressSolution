
import { useState } from "react";
import config from '@/lib/config'

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

    //    if (phoneNumber.includes("ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅabcdefghijklmnopqrstuvwxyzæøå")) {
    //     return alert("asd")
    //    }
        
        event.preventDefault()
        const response = await fetch(`${config.apiBaseUrl}students`, {
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

        const endpoint = `${config.apiBaseUrl}sms`
        
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
                <p>Ny elev</p>
                <input value={name} placeholder="Navn" onChange={event => setName(event.target.value)} type="Text"></input>
                &ensp;
                <input value={To} placeholder="+47 81549300" onChange={event => setPhoneNumber(event.target.value)} type="Number" ></input>
                &ensp;
            <button type="submit" onClick={HandleAddStudent}>Lagre og send SMS</button>
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
