import Head from 'next/head'
import AddStudent from '../Components/Admin/CreateStudent'
import Main from '../Components/Admin/Main'
import CreateAdmin from '../Components/createadmin'
import ShowStudentsHomeScreen from '../Components/Admin/ShowStudentsHomeScreen'  
import ShowInfoAboutAdminProfile from '../Components/Admin/ShowInfoAboutAdminProfile'
import styles from '../styles/Home.module.css'
import AddGroup from '../Components/Admin/CreateGroup'
import AddStudentToClass from '../Components/Admin/AddStudentToClass'
import Link from 'next/link'
import HeaderMenu from '../Components/Admin/HeaderMenu'
import AddClass from '../Components/Admin/AddClass'


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
        <br></br>
        <br></br>
        <br></br>
        <br></br>

            Hei fra index.js
            <br></br>
            <br></br>
            <br></br>

            <AddClass></AddClass>
            <br></br>
            <CreateAdmin></CreateAdmin>
      </main>


      <footer>Hei fra footer</footer>

    </div>
    
  )
}