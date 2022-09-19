import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../Components/Show/Header'

import ShowInfoAboutAdminProfile from '../Components/Show/ShowInfoAboutAdminProfile'
import DeleteEditStudentList from '../Components/Admin/DeleteEditStudentList'
import CreateStudentAndSendSMS from '../Components/Create/CreateStudentAndSendSMS'

import ShowInfoAbShowBellWhenStudentAsksForHelpoutAdminProfile from '../Components/Show/ShowBellWhenStudentAsksForHelp'


export default function Kontrollpanel() {
    return (
        <div className={styles.container}>
            <Head>
                <title>KONTROLLPANEL.</title>
                <meta name="description" content="OUR_DESCRIPTION" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Header />
                <div className="container">


                    <div className="row">
                        <div className="col-1" id="white"></div>
                        <div className="col"><ShowInfoAboutAdminProfile /></div>
                        <div className="col">Legg til ny klasse</div>
                        <div className="col-1" id="white"></div>
                    </div>

                    <div className="row">
                        <div className="col-1" id="white"></div>
                        <div className="col"><DeleteEditStudentList></DeleteEditStudentList></div>
                        <div className="col"><CreateStudentAndSendSMS></CreateStudentAndSendSMS></div>
                        <div className="col-1" id="white"></div>
                    </div>

                    <div className="row">
                        <div className="col-1" id="white"><h2></h2></div>
                        <div className="col"><h2>Footer</h2></div>
                        <div className="col-1" id="white"><h2></h2></div>
                    </div>
                </div>
                <ShowInfoAbShowBellWhenStudentAsksForHelpoutAdminProfile />
            </main>
        </div>
    )
}