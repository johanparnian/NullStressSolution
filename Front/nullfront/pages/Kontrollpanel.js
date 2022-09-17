import Head from 'next/head'
import ShowInfoAboutAdminProfile from '../Components/Show/ShowInfoAboutAdminProfile'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import DeleteEditStudentList from '../Components/Admin/DeleteEditStudentList'
import CreateStudentAndSendSMS from '../Components/Create/CreateStudentAndSendSMS'


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

        <div className="control-panel-grid">
            <div id="item-ctrl1"></div>
            <div id="item-ctrl2"><ShowInfoAboutAdminProfile /></div>
            <div id="item-ctrl3"><DeleteEditStudentList/></div>
            <div id="item-ctrl4"></div>
            <div id="item-ctrl5"><CreateStudentAndSendSMS /></div>
            <div id="item-ctrl6"></div>
        </div>

        
        </main>
        </div>
    )
}