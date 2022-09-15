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
import HeaderIcons from '../Components/Header'



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

        <div class="control-panel-grid">
            <div id="item-ctrl1">-</div>
            <div id="item-ctrl2">
                <ShowInfoAboutAdminProfile />
                </div>
            <div id="item-ctrl3">Component: elever i klassen</div>
            <div id="item-ctrl4"></div>
            <div id="item-ctrl5">Component: legg til ny student</div>
            <div id="item-ctrl6"></div>
        </div>
        </main>
        </div>
    )
}