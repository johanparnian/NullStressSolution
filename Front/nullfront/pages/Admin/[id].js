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
            <h1>Her skal adminen sin oversikt over klasser og elever vises</h1>
            <h1>slik "home" var i figma</h1>

        </div>

        </div>
    )
  }

  export default AdminView;