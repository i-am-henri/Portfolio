import React, {useState} from 'react'
import Head from "next/head"
import Link from "next/link"
import {AiOutlineCaretLeft} from "react-icons/ai"
import styles from "../styles/Projekt.module.scss"
import {motion} from "framer-motion"
import jsondb from "../json/projekts"
import ProjektCard from "../components/projektCard"


 if (typeof window !== "undefined") {
  console.log(navigator)
  if (navigator.language == "de-DE") {
    console.log("Du bist in deutschland")
  }
  console.log("hi")
} 
function writeToClipboard() {
  navigator.clipboard.writeText("Hello")
}

export default function projekte() {
  return (
    <div className={styles.container} style={{display: "flex", alignItems: 'center', justifyContent: "center", height: "100vh", width: "100vw"}}>
      <Head>
        <title>Projekte</title>
      </Head>
      
      <motion.div 
      className={styles.back}
      initial={{opacity: 0, x:"-100px"}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.4}}>
        <Link href="/">
        <AiOutlineCaretLeft />
        </Link>
        
      </motion.div>
      {/* Die Projekte */}
      <motion.div
      initial={{opacity: 0}}
      style={{height: "100vh", width: "100%", display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column"}}
      animate={{opacity: 1,  x:0}}
      className={styles.Projekt}
      transition={{duration: 0.4}}>
        {jsondb.projekte.map((projekt) =>(
          <ProjektCard className={styles.ProjektCard}  nummer={projekt.nummer} beschreibung={projekt.beschreibung} url={projekt.url} name={projekt.name} shortBeschreibung={projekt.shortBeschreibung} />
        ))}
      </motion.div>
    </div>) 
}
