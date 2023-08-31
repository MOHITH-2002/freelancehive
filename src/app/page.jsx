"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>

    <div className={styles.item}>
    <h1 className={styles.title}>Better design for your digital products</h1>
    <p className={styles.discription}>Stay up-to-date with the latest trends, technologies, and industry insights that impact your freelancing career.</p>
    <Link href="/Portfolio" className={styles.button}>Our works</Link>
    </div>
   <div className={styles.item}>
   <div className={styles.image}> 
   <Image height={500} width={500} src="/undraw.png" className={styles.img} alt=""/>

   </div>
   </div>
    </div>
  )
}
