import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.image}>
   
        <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/6476255/pexels-photo-6476255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
     
      <div className={styles.imagetitle}>
        <h1>Connecting Talent: Your Online Freelance Marketplace</h1>
      </div>
    </div>
    <div className={styles.works}>
    <div className={styles.item}>
      <h1>Who we are</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br/> 
      <br/> 
      <br/> 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      <br/>
      <br/>
      <br/>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className={styles.item}>
      <h1>Who we Do?</h1>
      <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
      <br/>
      <br/>
     
      - creative illustration art.
      <br/>
      <br/>
     
      - Dynamic Websites.
      <br/>
      <br/>

      - Mobile App Development.
    </p>
    <Link href="/Contact" className={styles.Contact}>Contact</Link>
    </div>

    </div>

    </div>
  )
}

export default About
