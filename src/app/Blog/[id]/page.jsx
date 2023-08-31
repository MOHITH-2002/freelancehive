import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import { notFound } from 'next/navigation'
export const metadata = {
  title: 'FreelanceHive. your post description',
  description: 'blog',
}
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  
 
  if (!res.ok) {
  
    return notFound()
  }
 
  return res.json()
}
 export const dynamic = 'force-dynamic'

const BlogId = async ({params}) => {
  const data = await getData(params.id)
  const random_number = Math.floor(Math.random() *100)

  return (
    <div className={styles.container}>
    <div className={styles.topbar}>
    <div className={styles.content}>
      <h1>{data.title}</h1>
     <p>{data.description}</p>
     <span className={styles.username}> <Image className={styles.userimg} width={40} height={35} src={`https://randomuser.me/api/portraits/men/${random_number}.jpg`} />
      {data.email}</span>
    </div>
    <div className={styles.image}>
    <Image className={styles.img} width={350} height={250}src={data.image}/>
    </div>

    </div>
    <div className={styles.bottom}>
    <p>{data.content}</p>
     </div>

    </div>
  )
}

export default BlogId
