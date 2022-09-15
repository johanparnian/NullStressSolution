import Head from 'next/head'
import AddStudent from '../Components/CreateStudent'
import Main from '../Components/Main'
import CreateAdmin from '../Components/Create/createadmin'
import ShowStudentsHomeScreen from '../Components/Show/ShowStudentsHomeScreen'
import ShowInfoAboutAdminProfile from '../Components/Show/ShowInfoAboutAdminProfile'
import styles from '../styles/Home.module.css'
import AddStudentToClass from '../Components/Create/AddStudentToClass'
import Link from 'next/link'
import AddClass from '../Components/Create/AddClass'
import ViewAdmins from '../Components/Show/ShowAdmins'

import HeaderTitle from '../Components/HeaderTitle'
import HeaderMenu from '../Components/HeaderMenu'
import HeaderIcons from '../Components/HeaderIcons'



export default function Kontrollpanel() {
    return (
        <div className={styles.container}>
        <Head>
        <title>KONTROLLPANEL.</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <HeaderTitle></HeaderTitle>
        <HeaderIcons></HeaderIcons>
        <HeaderMenu />
        </main>





        </div>
    )
}