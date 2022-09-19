import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import AddClass from '../../Components/Create/AddClass'

import ShowSchoolClasses from '../../Components/Show/ShowSchoolClasses'


const AdminView = () => {
    const router = useRouter()
    const { id } = router.query

    const [admin, setAdmin] = useState({})

    useEffect(() => {
        const endpoint = `https://localhost:7212/api/admins/${id}`

        fetch(endpoint)
        .then(response => response.json())
        .then(data => setAdmin(data))
        .catch(error => {
            console.log(error)
            throw error
        })
    }, [id])

    return (
        <div>
            <p>Admin ID: {id}</p>
            <h1>Adminen sin oversikt over klasser</h1>
            <ShowSchoolClasses classes={admin.schoolClasses}></ShowSchoolClasses>
            <h1>Her legger Admin til nye klasser</h1>
            <AddClass id={id} />
        </div>

    )
}

export default AdminView;