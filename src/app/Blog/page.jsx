import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/posts',{
  cache: "no-store",
})
  
 
  if (!res.ok) {
  
    return notFound();
    
  }
 
  return res.json()
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.maincontainer}>
    {data.map((d) =>
   <Link href={`/Blog/${d._id}`} className={styles.container} key={d._id} >
    
    <div className={styles.image}>
      <Image width={350} height={300} className={styles.img} src={d.image}/>
    </div>
    <div className={styles.content}>
      <h1 className={styles.title}>{d.title}</h1>
      <p className={styles.discrption}>{d.description}</p>
     
    </div>
   </Link>
      )
    }
    
    </div>
  )
}

export default Blog