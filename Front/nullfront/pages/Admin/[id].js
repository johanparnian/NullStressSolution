import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import CreateClass from '../../Components/Create/CreateClass'
import Head from 'next/head'
import Header from '../../Components/Show/Header'
import ShowInfoAboutAdminProfile from '../../Components/Show/ShowInfoAboutAdminProfile'
import DeleteEditStudentList from '../../Components/Admin/DeleteEditStudentList'
import CreateStudentAndSendSMS from '../../Components/Create/CreateStudentAndSendSMS'

import ShowSchoolClasses from '../../Components/Show/ShowSchoolClasses'
import ShowStudents from '../../Components/Show/ShowStudents'


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
            <Head>
                <title>KONTROLLPANEL.</title>
                <meta name="description" content="OUR_DESCRIPTION" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

        <main>
            <Header />
            <p>Her er en test for de som skal synke</p>
            <div className="container">
        

                    <div class="row">
                        <div class="col-1" id="white"></div>
                        <div class="col">
                            <div>{admin.name}</div>
                            <div>{admin.school}</div>
                        </div>
                        <div class="col"><CreateClass id={id}/></div>
                        

                        <div class="col-1" id="white"></div>
                    </div>

                    <div class="row">
                        <div class="col-1" id="white"></div>
                        <div class="col"><ShowSchoolClasses classes={admin.schoolClasses}></ShowSchoolClasses></div>
                        
                        <div class="col"></div>
                        <div class="col-1" id="white"></div>
                    </div>

                    <div class="row">
                        <div class="col-1" id="white"><h2></h2></div>
                        <div class="col"><h2>Footer</h2></div>
                        <div class="col-1" id="white"><h2></h2></div>
                    </div>
                </div>
            </main>
        </div>
        // <div>
        //         <div>
        //             <p>Admin ID: {id}</p>
        //             <h1>Adminen sin oversikt over klasser</h1>
        //             <ShowSchoolClasses classes={admin.schoolClasses}></ShowSchoolClasses>
        //             <h1>Her legger Admin til nye klasser</h1>
        //             <CreateClass id={id} />
        //         </div>
        // </div> 
    )
}

export default AdminView;