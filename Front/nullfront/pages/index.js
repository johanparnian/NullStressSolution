import Head from 'next/head'
import CreateAdmin from '../Components/Create/createadmin'
import styles from '../styles/Home.module.css'

import ShowStudents from '../Components/Show/ShowStudents'
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

        <Header />
        
        
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
      <CreateAdmin></CreateAdmin>
      </main>
      <footer>Hei fra footer</footer>
    </div>
  )
}