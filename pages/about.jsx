import React from 'react'
import Head from "next/head"
import styles from "../styles/About.module.scss"
import Link from "next/link"
import {AiOutlineCaretLeft} from "react-icons/ai"
import {motion} from "framer-motion"


export default function about() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
      <title>Über mich</title>
      </Head>
      {/* Back-Icon */}
      <motion.div 
      className={styles.back}
      initial={{opacity: 0, x:"-100px"}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.4}}>
        <Link href="/">
        <AiOutlineCaretLeft />
        </Link>
        
      </motion.div>
      {/* About-Text */}
    <motion.div
    initial={{x: "-100px", opacity: 0}}
    className={styles.about}
    animate={{x: 0, opacity:1}}
    transition={{duration: 0.5}}>
      <h2 className={styles.h2}>Ich und das programmieren :)</h2>
      <p className={styles.p}>Ich habe zu meinem elften Geburtstag einen Laptop bekommen, mit dem ich relativ schnell gut zurecht kam. Da es irgendwan etwas langweilig wurde, und ich mich sehr gut schon mit dem Videoschnitt und auch ein bisschen mit dem manipulieren von Fotos auskannte, wollte ich programmieren lernen. Ich hatte angefangen mit Youtube-Tutorials zu der Programmiersprache C++. Was ich nicht wusste, dass diese Sprache eine der schwierigsten Programmiersprachen ist. Ich musste schon früh das wieder aufgegeben, da ich nichts verstanden habe. Ich habe ein halbes Jahr Pause gemacht und mit Html-Youtube-Videos wieder angefangen. Im gegensatz zu C++ ist Html keine Programmiersprache und geht deutlich leichter. Nun bin ich einfach am Ball geblieben und kann heute Html, Css, ein bisschen ReactNative, ein bisschen das Javascript-Framework NextJs und die Javascript Libary React. :D</p>
    </motion.div>
    </div>
  )
}
