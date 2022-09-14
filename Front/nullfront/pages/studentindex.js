import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Image from "next/image";


export default function StudentIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Null Stress</title>
        <meta name="description" content="OUR_DESCRIPTION" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <div className="emoji-container">
      <div>Header</div>
        <div className="emoji">
        <img alt="image" src="1.png" height="100" width="100"
        ></img>
        </div>

        <div className="emoji">
        <img alt="image" src="2.png" height="100" width="100"></img>
        </div>

        <div className="emoji">
        <img alt="image" src="3.png" height="100" width="100"></img>

        </div>
        <div className="emoji">
        <img alt="image" src="4.png" height="100" width="100"></img>

        </div>
        <div className="emoji">
        <img alt="image" src="5.png" height="100" width="100"></img>
        </div>
      </div>
       
      </main>

      <footer></footer>

    </div>
  )
}


