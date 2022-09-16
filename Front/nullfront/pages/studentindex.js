import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Image from "next/image";

import SendMood from '../Components/Create/SendMood';


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


        <div class="snakkebutton">
          <button class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text">
              Jeg trenger noen å snakke med!
            </span>
          </button>
        </div>
      </main>

      <footer></footer>

    </div>
  )
}


