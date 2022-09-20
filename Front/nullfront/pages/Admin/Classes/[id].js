import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import AddStudentToClass from '../../../Components/Create/AddStudentToClass'
import Header from '../../../Components/Show/Header'
import ShowStudents from '../../../Components/Show/ShowStudents'
import Footer from '../../../Components/Show/Footer'


const ClassView = (props) => {
    const router = useRouter()
    const { id } = router.query

    const [schoolClasses, setSchoolClasses] = useState({})

    useEffect(() => {
        const endpoint = `https://localhost:7212/api/schoolclasses/${id}`

        fetch(endpoint)
            .then(response => response.json())
            .then(data => setSchoolClasses(data))
            .catch(error => {
                console.log(error)
                throw error
            })
    }, [id, schoolClasses]);

    return (
        <>
            <Header />
            <div className='overskrift1'>
                Studenter i klassen
            </div>
            <p>SchoolClass ID: {id}</p>
            <div className="container">
                <div className="col">
                
                
                <ShowStudents students={schoolClasses.students} />
                </div>
                <div className='overskrift2'>Legg til studenter</div>
                <div>
                <AddStudentToClass id={id} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ClassView;