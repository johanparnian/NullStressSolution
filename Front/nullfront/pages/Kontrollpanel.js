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
                <div class="container">


                    <div class="row">
                        <div class="col-1" id="white"></div>
                        <div class="col"><ShowInfoAboutAdminProfile /></div>
                        <div class="col">Legg til ny klasse</div>
                        <div class="col-1" id="white"></div>
                    </div>

                    <div class="row">
                        <div class="col-1" id="white"></div>
                        <div class="col"><DeleteEditStudentList/></div>
                        <div class="col"><CreateStudentAndSendSMS/></div>
                        <div class="col-1" id="white"></div>
                    </div>

                    <div class="row">
                        <div class="col-1" id="white"><h2></h2></div>
                        <div class="col"><h2>Footer</h2></div>
                        <div class="col-1" id="white"><h2></h2></div>
                    </div>
                </div>

                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                


            </main>
        </div>
    )
}