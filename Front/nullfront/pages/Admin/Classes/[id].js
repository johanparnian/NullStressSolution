import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import AddStudentToClass from '../../../Components/Create/AddStudentToClass'
import Header from '../../../Components/Show/Header'
import ShowStudents from '../../../Components/Show/ShowStudents'
import Footer from '../../../Components/Show/Footer'
import config from '@/lib/config'

const ClassView = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { className } = router.query


    const [isDirty, setIsDirty] = useState(false)
    const [schoolClasses, setSchoolClasses] = useState({})

    const actuallySetIsDirty = () => {
        setIsDirty(true)
    }

    useEffect(() => {
        const endpoint = `${config.apiBaseUrl}schoolclasses/${id}`

        fetch(endpoint)
            .then(response => response.json())
            .then(data => setSchoolClasses(data))
            .then(() => {
                setIsDirty(false)
            })
            .catch(error => {
                console.log(error)
                throw error
            })
    }, [id, isDirty]);

    return (
        <>
            <Header />
            <div className='overskrift1'>Studenter i klassen</div>
            
            <p>SchoolClass ID: {id}</p>

            <div className="overskrift3"><p>Lærerpanel</p></div>

            <div className='container'>
                <div className="row">
                    <div className='row'></div>
                    <div className="col-1"></div>
                    <div className="col">
                        <ShowStudents mutate={actuallySetIsDirty} students={schoolClasses.students} />
                    </div>
                        <div className="col-1"></div>
                        
                    <div className="col">
                        
                        <div><AddStudentToClass mutate={actuallySetIsDirty} id={id} /></div>
                    </div>
                    <div className="col-1"></div>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ClassView;