import { useRouter } from 'next/router'
import AddClass from '../../Components/Create/AddClass'

const AdminView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>
            <p>Admin ID: {id}</p>
            <AddClass id={id} />
            <div>
            
            <h1>Her skal adminen sin oversikt over klasser vises</h1>
            <h1>slik "home" var i figma - ved flere klasser kan elevoversikt implementeres med en state funksjons om sier hvilken klasse admin velger å vise på forsiden.</h1>

        </div>

        </div>
    )
  }

  export default AdminView;