import { useState, useEffect } from "react"
import ShowAdmins from "../Components/Show/ShowAdmins";
import CreateAdmin from "../Components/Create/createadmin";
import Footer from "../Components/Show/Footer";
import config from '@/lib/config'
import HeaderU from "../Components/Show/Header copy";


export default function AdminOverview() {
    const [admins, setAdmins] = useState([])

    console.log(config)

    const getAdmins = async () => {
        const endpoint = `${config.apiBaseUrl}admins`

        const response = await fetch(endpoint).catch(error => {
            console.log(error)
            throw error
        })

        if (response.ok) {
            return await response.json()
        }

        else {
            <></>
            console.log(response)
        }
    }

    const HandleCreateAdmin = async (event, admin) => {
        event.preventDefault()
        const response = await fetch (`${config.apiBaseUrl}admins`, { 
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(admin)
        })
        
        if (response.ok) {
            const addedAdmin = await response.json()
            setAdmins([...admins, addedAdmin])
        }
    }

    useEffect(() => {
        getAdmins()
            .then(admins => setAdmins(admins))
    }, [])

    return (
        <>
            <HeaderU></HeaderU>

            <div className="container">
                <div>
                    <div className="col-4" id="white"></div>
                    <div className="col">
                        <div className="overskrift1">Læreroversikt</div>
                    </div>
                    <div className="col-4" id="white"></div>
                </div>
            </div>

            <div className="container">
            <div className="col-4" id="centerme"><ShowAdmins admins={admins} /></div>
            <div className="col-4" id="centerme"><CreateAdmin onCreateAdmin={HandleCreateAdmin} /></div>
            </div>
            <Footer></Footer>
        </>
    )
}