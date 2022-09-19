import { useRouter } from 'next/router'
import AddStudentToClass from '../../../Components/Create/AddStudentToClass'
import ShowStudents from '../../../Components/Show/ShowStudents'


const ClassView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>

            <AddStudentToClass/>
            <p>Klasse ID: {id}</p>
            <h1>Oversikt over humører til studenten </h1>
                <ShowStudents/>
            <h1>Her legger Admin til nye studenter i denne klassen</h1>
        </div>
    )
  }

  export default ClassView;