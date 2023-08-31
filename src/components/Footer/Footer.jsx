import React from 'react'
import styles from "./Footer.module.css"
import { Facebook,Github,Linkedin,Instagram } from 'lucide-react'
import Link from 'next/link'
const Footer = () => {
  const date = new Date().getFullYear() 
  return (
    <div className={styles.container}>

    <div className={styles.copyright}> 
     © {date} FreelanceHive<span className={styles.dot}>.</span> All rights reserved.
    </div>
    <div className={styles.links}>
    <Facebook size={20} color="RGB(24, 119, 242)" cursor="pointer"/>
    <Instagram size={20} color="#fccc63" cursor="pointer"/>
    <Linkedin size={20} color="#0A66C2" cursor="pointer"/>
    <Link href="https://github.com/MOHITH-2002">

    <Github size={20} color="#4078c0" cursor="pointer"/>
    </Link>
    </div>
    </div>
  )
}

export default Footer