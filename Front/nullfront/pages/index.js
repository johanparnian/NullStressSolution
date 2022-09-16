import Head from 'next/head'
import AddStudent from '../Components/CreateStudent'
import Main from '../Components/Main'
import CreateAdmin from '../Components/Create/createadmin'
import ShowStudentsHomeScreen from '../Components/Show/ShowStudentsHomeScreen'
import ShowInfoAboutAdminProfile from '../Components/Show/ShowInfoAboutAdminProfile'
import styles from '../styles/Home.module.css'
import AddStudentToClass from '../Components/Create/AddStudentToClass'
import Link from 'next/link'
import HeaderMenu from '../Components/HeaderMenu'
import AddClass from '../Components/Create/AddClass'
import ViewAdmins from '../Components/Show/ShowAdmins'

export default function Index() {
  return (
    <div className={styles.container}>

      <Head>
        <title>APPNAME</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeaderMenu />

        Hei fra index.js

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
      <CreateAdmin></CreateAdmin>
      </main>


      <footer>Hei fra footer</footer>

    </div>

  )
}