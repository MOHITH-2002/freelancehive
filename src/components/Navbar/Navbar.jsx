"use client";
import Link from 'next/link'
import React,{useState} from 'react'
import styles from "./navbar.module.css"
import Darkmode from '../DarkMode/Darkmode'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const session = useSession()
  const [menuOpen,setmenu] = useState(false);
  return (
    
    <div className={`${styles.container } ${menuOpen ? styles.active : ''}`}>
        
            <Link href="/" className={styles.logo}>FreelanceHive<span className={styles.dot}>.</span></Link>
      
        <div className={styles.links}>
            <Darkmode/>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/About" className={styles.link}>About</Link>
            <Link href="/Portfolio" className={styles.link}>Portfolio</Link>
            <Link href="/Blog" className={styles.link}>Blog</Link>
            <Link href="/Contact" className={styles.link}>Contact</Link>
            <Link href="/Dashboard" className={styles.link}>Dashboard</Link>
            {
              session.status === "authenticated" &&
            <button onClick={signOut} className={styles.logout}>Logout</button> 
            }
      </div>
            <div className={styles.dark_hamberger}>

            
        <div className={styles.hamburger} onClick={()=>setmenu(!menuOpen)}>
         <span className={styles.span1 }></span>
         <span className={styles.span2 }></span>
         <span className={styles.span3 }></span>
        </div>
         <Darkmode/>
         </div>
      <div onClick={()=>setmenu(!menuOpen)} className={`${styles.menu } ${menuOpen ? styles.active : ''}`}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/About" className={styles.link}>About</Link>
            <Link href="/Portfolio" className={styles.link}>Portfolio</Link>
            <Link href="/Blog" className={styles.link}>Blog</Link>
            <Link href="/Contact" className={styles.link}>Contact</Link>
            <Link href="/Dashboard" className={styles.link}>Dashboard</Link>
            {
              session.status === "authenticated" &&
            <button onClick={signOut} className={styles.logout}>Logout</button> 
            }
      </div>
    </div>
    
  )
}

export default Navbar
