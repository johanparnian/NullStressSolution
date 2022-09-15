import { useRouter } from 'next/router'
import AddStudentToClass from '../../../Components/Create/AddStudentToClass'
import ShowStudents from '../../../Components/Show/ShowStudents'


const ClassView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>
            <p>Klasse ID: {id}</p>
            <h1>Her vises adminen sin oversikt over Studentene i denne klassen</h1>
            <ShowStudents></ShowStudents>

            <h1>Her legger Admin til nye studenter i denne klassen</h1>
            <AddStudentToClass id={id} />
        </div>
    )
  }

  export default ClassView;