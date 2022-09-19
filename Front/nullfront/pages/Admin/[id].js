import { useRouter } from 'next/router'
import CreateClass from '../../Components/Create/CreateClass'

import ShowSchoolClasses from '../../Components/Show/ShowSchoolClasses'


const AdminView = () => {
    const router = useRouter()
    const { id } = router.query



    return (
        <div>
            <p>Admin ID: {id}</p>
            <h1>Adminen sin oversikt over klasser</h1>
            <ShowSchoolClasses></ShowSchoolClasses>
            <h1>Her legger Admin til nye klasser</h1>
            <CreateClass id={id} />
        </div>

    )
}

export default AdminView;