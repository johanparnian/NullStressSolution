import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import CreateClass from '../../Components/Create/CreateClass'
import Head from 'next/head'
import Header from '../../Components/Show/Header'
import Footer from '../../Components/Show/Footer'
import ShowInfoAboutAdminProfile from '../../Components/Show/ShowInfoAboutAdminProfile'
import DeleteEditStudentList from '../../Components/Admin/DeleteEditStudentList'
import CreateStudentAndSendSMS from '../../Components/arkiv/CreateStudentAndSendSMS'

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
            <div className="overskrift1">
                        Oversikt over klasser
                    </div>
            <div className="container">
                    <div class="row">
                        <div class="col-1" id="white"></div>
                        <div class="col">
                            <div className='overskrift2'>
                            <div>{admin.name}</div>
                            <div>{admin.school}</div>
                        </div>
                        </div>
                        <div class="col"><CreateClass id={id}/></div>
                        

                        <div class="col-1" id="white"></div>
                    </div>

                    <div class="row">
                        <div class="col-1" id="white"></div>
                        <div class="col"><ShowSchoolClasses classes={admin.schoolClasses}></ShowSchoolClasses></div>
                        
                        {/* <div class="col"></div> */}
                        <div class="col-1" id="white"></div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default AdminView;