import Head from 'next/head'
import ShowInfoAboutAdminProfile from '../Components/Show/ShowInfoAboutAdminProfile'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import DeleteEditStudentList from '../Components/Admin/DeleteStudentList'



export default function Kontrollpanel() {
    return (
        <div className={styles.container}>
        <Head>
        <title>KONTROLLPANEL.</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <Header />

        <div class="control-panel-grid">
            <div id="item-ctrl1">-</div>
            <div id="item-ctrl2">
                <ShowInfoAboutAdminProfile />
                </div>
            <div id="item-ctrl3">Component: elever i klassen</div>
            <div id="item-ctrl4"></div>
            <div id="item-ctrl5">Component: legg til ny student</div>
            <div id="item-ctrl6"></div>
        </div>

        <DeleteEditStudentList/>
        </main>
        </div>
    )
}