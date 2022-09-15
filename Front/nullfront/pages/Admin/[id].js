import { useRouter } from 'next/router'
import AddClass from '../../Components/Create/AddClass'
import ShowSchoolClasses from '../../Components/Show/ShowSchoolClasses'

const AdminView = () => {
    const router = useRouter()
    const { id } = router.query



    return (
        <div>
            <p>Admin ID: {id}</p>
            <h1>Her vises adminen sin oversikt over klasser</h1>
            <ShowSchoolClasses></ShowSchoolClasses>
            <h1>Her legger Admin til nye klasser</h1>
            <AddClass id={id} />
        </div>

    )
}

export default AdminView;