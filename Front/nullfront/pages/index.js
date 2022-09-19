import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ShowStudents from '../Components/Show/ShowStudents'
import Header from '../Components/Show/Header'
import AddStudentToClass from '../Components/Create/AddStudentToClass'
import BarChart from '../Components/Show/BarChart'



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

        {/* <BarChart /> */}



        {/* <CreateAdmin /> */}
      </main>
      <footer>Hei fra footer</footer>
    </div>
  )
}