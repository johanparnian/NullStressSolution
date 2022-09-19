import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Header from '../../../../Components/Show/Header'
import ShowMoods from '../../../../Components/Show/ShowMoods'




const MoodView = () => {
    const router = useRouter()
    const { id } = router.query

    const [student, setStudent] = useState({})

    useEffect(() => {
        const endpoint = `https://localhost:7212/api/students/${id}`

        fetch(endpoint)
        .then(response => response.json())
        .then(data => setStudent(data))
        .catch(error => {
            console.log(error)
            throw error
        })
    }, [id])

    return (
        <div>
            <Header />
            <p>Student ID: {id}</p>
            <h1>Eleven sine moods</h1>
            <ShowMoods moods = {student.moods}/>

            
        </div>

    )
}

export default MoodView;