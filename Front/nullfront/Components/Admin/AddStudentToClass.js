
export default function AddStudentToClass(){

    const [studentName, setStudentName] = useState("")

    async function handleAddStudent(event, studentName){


        const response = await fetch (`https://localhost:7212/api/students/{id}/schoolclassName/${studentName}`, {
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

    return(
        <form>
                <label>
                <p>Add student to class</p>
                Student name:
                <input value={studentName} onChange={event => setStudentName(event.target.value)}type="Text"></input>
                </label>
                <button type="submit" onClick={handleAddStudent}>Add student</button>
            </form>






    )


}

   

   

  

   

 
