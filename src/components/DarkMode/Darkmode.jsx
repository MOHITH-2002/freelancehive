"use client"
import React, { useContext } from 'react'
import styles from "./Darkmode.module.css"
import { ThemeContext } from '@/context/Themecontext'
const Darkmode = () => {
    
  const {toggle,mode}=useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.item}>🌙</div>
        <div className={styles.item}>🔆</div>
        <div className={styles.round} style={ mode=== "light" ? {left:"3px"} : {right:"3px"}}  />
    </div>
  )
}

export default Darkmode