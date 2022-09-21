import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Header from '../../../../Components/Show/Header'
import ShowMoods from '../../../../Components/Show/ShowMoods'



const MoodView = () => {
    const router = useRouter()
    const { id } = router.query

    const [students, setStudents] = useState({})

    useEffect(() => {
        const endpoint = `https://localhost:7212/api/students/${id}`

        fetch(endpoint)
        .then(response => response.json())
        .then(data => setStudents(data))
        .catch(error => {
            console.log(error)
            throw error
        })
    }, [id]);

    return (
        
        <div>
            <Header />
            <p>Student ID: {id}</p>
            <h1>Oversikt over humører</h1>

            <ShowMoods moods={students.moods}/>
            
        </div>
    )
}

export default MoodView;