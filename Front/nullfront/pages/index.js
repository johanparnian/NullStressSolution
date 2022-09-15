import Head from 'next/head'

import styles from '../styles/Home.module.css'
import HeaderMenu from '../Components/Admin/HeaderMenu'
import ShowStudents from '../Components/Show/ShowStudents'
import ShowAdmins from '../Components/Show/ShowAdmins'
import CreateAdmin from '../Components/Create/createadmin'


import Header from '../Components/Header'

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

        <HeaderMenu />
        
        
        <ShowStudents />

        
        {/* <StudenCard /> */}
        {/* <br></br>
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
            <AddStudentToClass/>
            <br></br>
            <br></br>
      <ViewAdmins></ViewAdmins> */}

      </main>
      <footer>Hei fra footer</footer>
    </div>
  )
}