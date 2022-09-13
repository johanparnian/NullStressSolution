import Head from 'next/head'
import Image from 'next/image'
import AddStudent from '../Components/Admin/AddNewstudent'
import HeaderView from '../Components/Admin/HeaderView'
import Main from '../Components/Admin/Main'
import CreateAdmin from '../Components/CreateAdmin'
import styles from '../styles/Home.module.css'
import ShowStudentsHomeScreen from '../Components/Admin/ShowStudentsHomeScreen'  
import ShowInfoAboutAdminProfile from '../Components/Admin/ShowInfoAboutAdminProfile'


export default function StudentIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Null Stress</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      Hello from student index page
       
      </main>

      <footer></footer>

    </div>
  )
}
