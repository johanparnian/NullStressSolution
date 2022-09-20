export default function CreateMood(props) {

    async function HandleSendMood(id, moodId) {
        event.preventDefault()

        const response = await fetch(`https://localhost:7212/api/students/${props.id}/mood/${moodId}`, {
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
        <div className="emoji-knapper">
            <h2>Hvordan har du det i dag?</h2>
            <div className="snakkebutton">
            Trykk på det som stemmer best for deg!

            </div>
            
            <div className="emoji">
                
                <img
                    draggable="false"
                    alt="image"
                    src="/1.png"
                    height="100"
                    width="100"
                    className="button-82-pushable"
                    onClick={(e) => HandleSendMood(e, 1)}

                ></img>
            </div>

            <div className="emoji">
                <img
                    draggable="false"
                    alt="image"
                    src="/2.png"
                    height="100"
                    width="100"
                    className="button-82-pushable"
                    onClick={(e) => HandleSendMood(e, 2)}
                ></img>
            </div>

            <div className="emoji">
                <img
                    draggable="false"
                    alt="image"
                    src="/3.png"
                    height="100"
                    width="100"
                    className="button-82-pushable"
                    onClick={(e) => HandleSendMood(e, 3)}
                ></img>
            </div>

            <div className="emoji">
                <img
                    draggable="false"
                    alt="image"
                    src="/4.png"
                    height="100"
                    width="100"
                    className=""="button-82-pushable"
                    onClick={(e) => HandleSendMood(e, 4)}
                ></img>
            </div>

            <div className="emoji">
                <img
                    draggable="false"
                    alt="image"
                    src="/5.png"
                    height="100"
                    width="100"
                    className="button-82-pushable"
                    onClick={(e) => HandleSendMood(e, 5)}
                ></img>
            </div>
        </div>
    )
}
