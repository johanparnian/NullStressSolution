import Head from 'next/head'
import Image from 'next/image'
import AddStudent from '../Components/Admin/AddNewstudent'
import HeaderView from '../Components/Admin/HeaderView'
import Main from '../Components/Admin/Main'
import CreateAdmin from '../Components/CreateAdmin'
import ShowStudentsHomeScreen from '../Components/Admin/ShowStudentsHomeScreen'  
import ShowInfoAboutAdminProfile from '../Components/Admin/ShowInfoAboutAdminProfile'
import ReactDOM from "react-dom/client";
import StudentIndex from './studentindex'
import App from './app'
import styles from '../styles/Home.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Link from 'react-router-dom';

export default function Index() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Null Stress</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
            Header view: <HeaderView />
            
            Create admin: <CreateAdmin /> 

            Show Student names: <ShowStudentsHomeScreen></ShowStudentsHomeScreen>

            Add student: <AddStudent/>

            Show info about admin<ShowInfoAboutAdminProfile></ShowInfoAboutAdminProfile>
            
            Links:

            {/* Denne linken funker én gang, men krasjer siden etterpå... */}
            {/* <Router>
                <Link to="/studentindex">StudentIndex</Link>
            </Router> */}
          
          <div id="container2">
              <Main />
          </div>

          Main.

       
      </main>

      <footer>Hei fra footer



      </footer>

    </div>
  )
}