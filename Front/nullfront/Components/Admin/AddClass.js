import { useState } from "react";

export default function AddClass() {
    const [ClassName, setClassName] = useState("")


    async function HandleCreateStudent(event, ClassName) {
        event.preventDefault()

        const response = await fetch($`https://localhost:7212/api/Admins/${id}/mood/${ClassName}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            console.log("ok")
            return response
        }
        else {
            console.log("response error")
        }
    }

    return (
       //behold 
        <div> 

        
        <form>
        <label>
        Add name of class:
        <input value={ClassName} onChange={event => setClassName(event.target.value)}type="Text"></input>
        </label>
        <button type="submit" onClick={HandleCreateStudent}>Add</button>
    </form>

        //
        <div className="emoji-container">
            <div className="emoji">
                <img
                    draggable="false"
                    alt="image"
                    src="1.png"
                    height="100"
                    width="100"
                    onClick={(e) => HandleSendMood(e, 1)}
                ></img>
            </div>

            <div className="emoji">
                <img
                    draggable="false"
                    alt="image"
                    src="2.png"
                    height="100"
                    width="100"
                    onClick={(e) => HandleSendMood(e, 2)}
                ></img>
            </div>

            <div className="emoji">
                <img
                    draggable="false"
                    alt="image"
                    src="3.png"
                    height="100"
                    width="100"
                    onClick={(e) => HandleSendMood(e, 3)}
                ></img>
            </div>

            <div className="emoji">
                <img
                    draggable="false"
                    alt="image"
                    src="4.png"
                    height="100"
                    width="100"
                    onClick={(e) => HandleSendMood(e, 4)}
                ></img>
            </div>

            <div className="emoji">
                <img
                    draggable="false"
                    alt="image"
                    src="5.png"
                    height="100"
                    width="100"
                    onClick={(e) => HandleSendMood(e, 5)}
                ></img>
            </div>
        </div>
        </div>// behold
    )

}
