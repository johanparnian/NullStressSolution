import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function StudentIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Null Stress</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      Hello from studentindex.js
       
      </main>

      <footer></footer>

    </div>
  )
}
