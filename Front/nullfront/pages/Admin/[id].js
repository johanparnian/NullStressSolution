import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import CreateClass from '../../Components/Create/CreateClass'
import Head from 'next/head'
import Header from '../../Components/Show/Header'
import Footer from '../../Components/Show/Footer'
import ShowSchoolClasses from '../../Components/Show/ShowSchoolClasses'


const AdminView = () => {
    const router = useRouter()
    const { id } = router.query

    const [admin, setAdmin] = useState({})

    async function HandleCreateClass(event, clazz) {
        event.preventDefault()

        const response = await fetch(`https://localhost:7212/api/admins/${id}/SchoolClass/${clazz}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            const addedClass = await response.json()
            setAdmin({
                ...admin,
                schoolClasses: [...admin.schoolClasses, addedClass]
            })
        }
  
    }


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
                    <div className="row">
                        <div className="col-1" id="white"></div>
                        <div className="col">
                            <div className='overskrift3'>
                                <p><br></br>{admin.name} - {admin.school}</p>
                                <div className='paddingtop'></div>
                                
                        </div>
                        </div>

                        

                        <div className="col-1" id="white"></div>
                    </div>

                    <div className="row">
                        <div className="col-1" id="white"></div>
                        <div className="col"><ShowSchoolClasses classes={admin.schoolClasses}></ShowSchoolClasses></div>
                        <div className="col"><CreateClass createClass={HandleCreateClass}/></div>
                        
                        <div className="col-1" id="white"></div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default AdminView;