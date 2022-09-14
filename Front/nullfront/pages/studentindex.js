import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Image from "next/image";

import SendMood from '../Components/Student/SendMood';


export default function StudentIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Null Stress</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <SendMood></SendMood>
      
      </main>

      <footer></footer>

    </div>
  )
}


