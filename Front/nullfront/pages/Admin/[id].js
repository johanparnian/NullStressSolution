import { useRouter } from 'next/router'
import AddClass from '../../Components/Admin/AddClass'

const AdminView = () => {
    const router = useRouter()
    const { id } = router.query


  
    return (
        <div>
            <p>Admin ID: {id}</p>
            <AddClass id={id} />
        </div>
    )
  }

  export default AdminView;