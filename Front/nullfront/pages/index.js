import Head from 'next/head'
import AddStudent from '../Components/Admin/CreateStudent'
import HeaderView from '../Components/Admin/HeaderView'
import Main from '../Components/Admin/Main'
import CreateAdmin from '../Components/CreateAdmin'
import ShowStudentsHomeScreen from '../Components/Admin/ShowStudentsHomeScreen'  
import ShowInfoAboutAdminProfile from '../Components/Admin/ShowInfoAboutAdminProfile'
import styles from '../styles/Home.module.css'


import Link from 'next/link'

export default function Index() {
  return (
    <div className={styles.container}>

      <Head>
        <title>APPNAME</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
            Header view: <HeaderView />
            
            Create admin: <CreateAdmin /> 

            Show Student names: <ShowStudentsHomeScreen></ShowStudentsHomeScreen>

            Add student: <AddStudent/>

            {/* Show info about admin <ShowInfoAboutAdminProfile></ShowInfoAboutAdminProfile> */}
            
            Link: 

            <Link href="/studentindex"><a>StudentIndex</a></Link>
          
          <div id="container2">
              <Main />
          </div>
       
      </main>

      <footer>Hei fra footer

      </footer>

    </div>
    
  )
}