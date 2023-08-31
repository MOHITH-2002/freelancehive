import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { MdDelete } from 'react-icons/md';
import Image from 'next/image';
import { MrMiyagi } from '@uiball/loaders';
import styles from "./page.module.css";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, mutate, error, isValidating } = useSWR(`/api/posts?email=${session?.data?.user.email}`, fetcher);

  if (session.status === 'loading') {
    return <MrMiyagi className={styles.loader} size={50} lineWeight={6.3} speed={1} color="#fca84f" />;
  }

  if (session.status === 'unauthenticated') {
    router?.push('/Dashboard/Login');
  }
    const handlePost = async (e)=>{
      e.preventDefault();
      const title = e.target[0].value
      const description =e.target[1].value
      const image = e.target[2].value
      const content = e.target[3].value
  
      await fetch("/api/posts",{
        method: "POST",
        body: JSON.stringify({
          email:session?.data?.user.email,
          image,
          title,
          description,
          content,
        })
      })
      mutate()
      e.target.reset()
    }
    const handleDelete = async (id)=>{
      try {
        await fetch(`/api/posts/${id}`,{
          method: "DELETE"
        })
        mutate();
      } catch (error) {
        console.log(error);
      }

    }
    if(session.status === 'authenticated'){

      return (
        <div className={styles.container}>       
        <div className={styles.posts}>
        {
          isLoading ? <MrMiyagi className={styles.loader} size={50} lineWeight={6.5} speed={1} color="#fca84f" /> : data.map( (p) =>
        <div className={styles.post} key={p._id}>
        <div className={styles.image}>
          <Image src={p.image} width={200} height={200} className={styles.img} alt = " "/>
        </div>
        <h2 className={styles.title}>{p.title}</h2>
        
        <MdDelete className={styles.delete} onClick={()=>handleDelete(p._id)} />
        </div>
        )}
        </div> 
        <form className={styles.form} onSubmit={handlePost}>
        <h1 className={styles.posttitle}>Add New Post</h1>
        <input type='text' placeholder='Title' className={styles.input} />
        <input type='text' placeholder='Description' className={styles.input} />
        <input type='text' placeholder='Image url' className={styles.input} />
        <textarea className={styles.textarea} type="text" placeholder="Content" ></textarea>
        <button className={styles.button}>submit</button>

        </form>
     
        </div>
      )
    }
}

export default dashboard