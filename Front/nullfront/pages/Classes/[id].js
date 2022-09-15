import { useRouter } from 'next/router'
import AddStudentToClass from '../../Components/Create/AddStudentToClass'


const ClassView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>
            <p>Klasse ID: {id}</p>
            <AddStudentToClass id={id} />
            <div>
            
            <h1>Her skal adminen sin oversikt over klasser vises</h1>
            <h1>slik "home" var i figma - ved flere klasser kan elevoversikt implementeres med en state funksjons om sier hvilken klasse admin velger å vise på forsiden.</h1>

        </div>

        </div>
    )
  }

  export default ClassView;