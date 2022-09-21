import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../../Components/Show/Header'
import CreateClass from '../Components/Create/CreateClass'

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
            <Head>
                <title>KONTROLLPANEL.</title>
                <meta name="description" content="OUR_DESCRIPTION" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

        <main>
            <Header />
            <p>Her er en test for de som skal synke</p>
            <div className="container">
        

                    <div className="row">
                        <div className="col-1" id="white"></div>
                        <div className="col">
                            <div>{admin.name}</div>
                            <div>{admin.school}</div>
                        </div>
                        <div className="col"><CreateClass id={id}/></div>
                        

                        <div className="col-1" id="white"></div>
                    </div>

                    <div className="row">
                        <div className="col-1" id="white"></div>
                        <div className="col"><ShowSchoolClasses classes={admin.schoolClasses}></ShowSchoolClasses></div>
                        
                        <div className="col"></div>
                        <div className="col-1" id="white"></div>
                    </div>

                    <div className="row">
                        <div className="col-1" id="white"><h2></h2></div>
                        <div className="col"><h2>Footer</h2></div>
                        <div className="col-1" id="white"><h2></h2></div>
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