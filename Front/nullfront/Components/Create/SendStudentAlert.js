export default function SendStudentAlert() {

  async function HandleSendStudentAlert(event, props) {
    event.preventDefault()

    const response = await fetch(`https://localhost:7212/api/students/${1}/wantshelp`, {
      // const response = await fetch(`https://localhost:7212/api/students/${props.id}/wantshelp`, {
        //denne må oppdateres med riktig ID når studentview rendres for hver student!
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    }
    )
    if (response.ok) {
      console.log("OK:)")
    }
    else console.log("nooo!")
  }

  return (
    <>
      <div class="snakkebutton">
        <button 
          class="button-82-pushable" 
          role="button"
          onClick={HandleSendStudentAlert}>
            {/* (wantshelp) => HandleSendStudentAlert(wantshelp, true) */}
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text">
            Jeg trenger noen å snakke med! 
          </span>
        </button>
      </div>
    </>
  )
}