import config from '@/lib/config'

export default function SendStudentAlert(hjelp) {

  const [alert, setAlert] = useState(0)

  async function HandleSendStudentAlert(event, props) {
    event.preventDefault()

    const response = await fetch(`${config.apiBaseUrl}students/${hjelp.id}/wantshelp`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    }
    )
    setAlert(1)
    if (response.ok) {
      console.log("OK:)")
    }
    else console.log("nooo!")
  }

  if (alert === 1) {
    return (
        <>
            <div style={{textAlign: "center"}}>
                Læreren din vil kontakte deg for en samtale...
            </div>
        </>
    )
}
else{

  return (
    <>
      <div className="snakkebutton">
        <button 
          className="button-82-pushable" 
          role="button"
          onClick={HandleSendStudentAlert}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">
            Jeg vil gjerne ta en prat...
          </span>
        </button>
      </div>
      <div className="snakkebutton">
        
      </div>
    </>
  )
}
}