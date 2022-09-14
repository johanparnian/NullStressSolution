import Head from 'next/head'
import AddStudent from '../Components/Admin/CreateStudent'
import Main from '../Components/Admin/Main'
import CreateAdmin from '../Components/CreateAdmin'
import ShowStudentsHomeScreen from '../Components/Admin/ShowStudentsHomeScreen'  
import ShowInfoAboutAdminProfile from '../Components/Admin/ShowInfoAboutAdminProfile'
import styles from '../styles/Home.module.css'
import AddGroup from '../Components/Admin/CreateGroup'
import AddStudentToClass from '../Components/Admin/AddStudentToClass'
import Link from 'next/link'
import HeaderMenu from '../Components/Admin/HeaderMenu'


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
      </main>


      <footer>Hei fra footer</footer>

    </div>
    
  )
}