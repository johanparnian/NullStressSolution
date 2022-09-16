export default function ShowMood {

}
const [moods, setMoods] = useState([])
 
 
 const getMoods = async () => {
    const endpoint = "https://localhost:7212/api/Moods"

    const response = await fetch(endpoint).catch
    // .Where( i => i.studentId == id)
    (error => {            
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

useEffect(() => {    
    getMoods().then(moods => setMoods(moods) )
}, [])

