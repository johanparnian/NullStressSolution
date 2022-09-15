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

//import ShowClasses from '../Components/Show/ShowClasses'


export default function Index() {
  return (
    <div className={styles.container}>

      <Head>
        <title>HJEM.</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeaderTitle></HeaderTitle>
        <HeaderIcons></HeaderIcons>
        <HeaderMenu />

        <div class="angry-grid">
          <div id="item-0">Insert komponent som displayer klassenavn.</div>
          <div id="item-1"></div>
          <div id="item-2"></div>
          <div id="item-3"></div>
          <div id="item-4">Insert komponent som mapper cards av elevene i klassen.</div>
        </div>

        <div>
          <br></br>
          <a href='http://localhost:3000/Admin/1'>Admin Dashboard (future admin login button) </a>
          <br></br>
          <br></br>
        </div>

        {/* <br></br>

            <AddClass></AddClass>
            <br></br>
            <CreateAdmin></CreateAdmin>
            <AddStudentToClass/>
            <br></br>
      <ViewAdmins></ViewAdmins> */}
      </main>

      <footer>Hei fra footer</footer>

    </div>

  )
}