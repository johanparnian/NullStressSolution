import { useRouter } from 'next/router'
import AddStudentToClass from '../../../Components/Create/AddStudentToClass'


const ClassView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>
            <p>Klasse ID: {id}</p>
            <h1>Her vises adminen sin oversikt over Studentene i denne klassen</h1>


            <h1>Her legger Admin til nye studenter til klassen hen er i</h1>
            <AddStudentToClass id={id} />
        </div>
    )
  }

  export default ClassView;