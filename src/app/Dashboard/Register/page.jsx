"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc';
import { MrMiyagi } from '@uiball/loaders'

const Register = () => {
  const[error,setError] = useState(null);
  const router = useRouter();
  const session = useSession();

  if(session.status==="loading"){
      return  <MrMiyagi className={styles.loader} size={50} lineWeight={6.3} speed={1} color="#fca84f" />

  }
  if(session.status==="authenticated"){
    return router?.push("/Dashboard")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch('/api/auth/register',{
        method: 'POST',
        headers: {
          "Content-type":"application/Json"
        },
        body:JSON.stringify({
          username,email,password,
        })
      });
      res.status === 201 && router.push("/Dashboard/Login?success=true & account has been created")
    } catch (error) {
      setError(true);
    }
  }
  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}>
    <input type="text" className={styles.input} placeholder = "Username" required />
    <input type="email" className={styles.input} placeholder = "Email" required />
    <input type="password" className={styles.input} placeholder = "Password" required />
    <button className={styles.button} >Register</button>
    </form>
    {
      error && <span className={styles.error}>something went wrong</span>
    }
    <Link href="/Dashboard/Login" className={styles.link}>Login with an existing account</Link>
    <button onClick={() => signIn('google')} className={styles.google}><FcGoogle className={styles.googlefs} /> Sign up with Google</button>
    </div>
  )
}

export default Register