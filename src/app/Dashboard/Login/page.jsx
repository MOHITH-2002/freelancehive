"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc';
import { MrMiyagi } from '@uiball/loaders'


const Login = () => {
  const session = useSession();
  const router = useRouter();
  if(session.status==="loading"){
   return  <MrMiyagi className={styles.loader} size={50} lineWeight={6.3} speed={1} color="#fca84f" />

  }
  if(session.status==="authenticated"){
    return router?.push("/Dashboard")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials",{email,password});

  }
  
  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}>
    <input type="email" className={styles.input} placeholder = "Email" required />
    <input type="password" className={styles.input} placeholder = "Password" required />
    <button className={styles.button} >Login</button>
    </form>
   
    <Link href="/Dashboard/Register" className={styles.link}>New to Freelancehive.? sign up</Link>
      <button onClick={() => signIn('google')} className={styles.google}><FcGoogle className={styles.googlefs} /> Sign in with Google</button>
    </div>
  )
}

export default Login