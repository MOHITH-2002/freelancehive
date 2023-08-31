import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { items } from './data';
import {notFound} from 'next/navigation'

const getData=(category)=>{
   const data = items[category]
   if(data){
      return data;
   }
   return notFound();
}
const page = ({params}) => {
   const data = getData(params.category);
    return (

    <div className={styles.container}>

    <h1 className={styles.title}>{params.category}</h1>
    {
      data.map(item => 
    <div className={styles.items}  key={item.id}>
        <div className={styles.content}>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <Link href="" className={styles.link}>See more</Link>
         </div>
         <div className={styles.image}>
            <Image width={300} height={400} className={styles.img} src={item.image} />
         </div>
    </div>

    )}


    
    </div>
    )
}

export default page