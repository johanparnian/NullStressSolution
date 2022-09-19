import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../Components/Show/Header'
import ShowAdmins from '../Components/Show/ShowAdmins'
import CreateAdmin from '../Components/Create/createadmin'



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


        {/* <ShowStudents /> */}
        {/* <CreateAdmin /> */}
      </main>
      <footer>Hei fra footer</footer>
    </div>
  )
}