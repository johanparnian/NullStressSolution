export default function SendMood() {

    async function HandleSendMood(event, moodId) {
        event.preventDefault()
        

        const response = await fetch (`https://localhost:7212/api/students/1/mood/${moodId}`, {
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

    return (
        <div className="emoji-container">
        <div>
        <form>
                <label>
                {/* <input value={TemporaryMood} onChange={event => setTemporaryMood(event.target.value)}type="Number"></input> */}
                </label>
                <button type="submit" onClick={HandleSendMood}>Add Mood to student 1</button>
            </form>
        </div>
          <div className="emoji">

          <img draggable="false"

          alt="image" 
          src="1.png" 
          height="100" 
          width="100"
            onClick={(e) => HandleSendMood(e, 1)}
          ></img>

          </div>
  
          <div className="emoji">
          <img draggable="false" 
          alt="image" 
          src="2.png" 
          height="100" 
          width="100"
          onClick={(e) => HandleSendMood(e, 2)}></img>
          </div>
  
          <div className="emoji">
          <img draggable="false" 
          alt="image" 
          src="3.png" 
          height="100" 
          width="100"
          onClick={(e) => HandleSendMood(e, 3)}></img>
  
          </div>
          <div className="emoji">
          <img draggable="false" 
            alt="image" 
            src="4.png" 
            height="100"
            onClick={(e) => HandleSendMood(e, 4)} 
            width="100"></img>
  
          </div>
          <div className="emoji">
            <a>
          <img  
          type="submit"
          value="mood"
          alt="image" 
          src="5.png" 
          height="100" 
          width="100"
          onClick={(e) => HandleSendMood(e, 5)}>
          </img>
          </a>
          </div>
        </div>
    )

}
