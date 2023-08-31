import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
const Portfolio = () => {
  return (
    <div styles={styles.container}>
      <h1>Choose a Gallery</h1>
      <div className={styles.items}>
        <Link className={styles.link} href="/Portfolio/Illustrations">
          <span className={styles.span}>Illustrations</span>
        </Link>
        <Link className={styles.link} href="/Portfolio/Websites">
        <span className={styles.span}>Websites</span>
        </Link>
        <Link className={styles.link} href="/Portfolio/Application">
        <span className={styles.span}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio