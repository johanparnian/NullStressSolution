
// TODO: Sørge for at siden viser elev basert på student.id.

export default function ShowOneStudent() {
    const getStudents = async () => {
        
        const endpoint = "https://localhost:7212/api/students"

        const response = await fetch(endpoint).catch(error => {
            console.log(error)
            throw error
        })

        if (response.ok){
            return await response.json()
        }

        else {
            console.log(response)
        }
    }

    const [students, setStudents] = useState([])

     useEffect(() => {
         getStudents()
         .then(students => setStudents(students))
     }, [])

    return (
        <div>
            Here are the student names:
            <div>
            {/* <p key={student.id}>{student.name}</p>
            <p key={student.id}>Her vil mood være</p>
            <p key={student.id}>Ev. dato</p>             */}
            </div>
        </div>
    )
}