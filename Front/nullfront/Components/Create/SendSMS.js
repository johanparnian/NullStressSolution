import React from 'react'
import { useState } from "react"

export default function SendSMS() {

    const [to, setTo] = useState("+4790173862")
    const [from, setFrom] = useState("+18145643389")
    const [message, setMessage] = useState("ping")

    const HandleSendSMS = async (event) => {
        const sms = { to, from, message }

        event.preventDefault()
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
        <div>
            <form>
                <div>
                    <p>SEND BARE MELDINGER NÅR DU SKAL TESTE APPLIKASJONEN - det koster peng.</p>
                    <label>
                        <p>To</p>
                        <input type="text" value={to} onChange={event => setTo(event.target.value)}></input>
                    </label>
                    <br></br>
                    <label>
                        <p>From</p>
                        <input type="text" value={from} onChange={event => setFrom(event.target.value)}></input>
                    </label>
                    <br></br>
                    <label>
                        <p>Message</p>
                        <input type="text" value={message} onChange={event => setMessage(event.target.value)}></input>
                    </label>
                    <br></br>
                    <button type="submit" onClick={HandleSendSMS}>Send SMS</button>
                </div>
            </form>
        </div>
    )
}

// //GET to "https://localhost:7212/sms"
// //Sample Query:

// //{
// //            "to": "+4790173862",
// //            "from": "+18145643389",
// //            "message": "ping"
// //          }
//With trial version ONLY these numbers work.