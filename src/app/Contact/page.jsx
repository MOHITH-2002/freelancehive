import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
export const metadata = {
  title: 'Blog Agencies,contact',
  description: 'blog',
}

const Contact = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
      <div className={styles.image}>
    <Image fill={true} src="/contact.jpeg" className={styles.img} alt=""/>
      </div>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="text" placeholder="Email" />
         <textarea className={styles.textarea} type="text" placeholder="message" ></textarea>
         <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact