import Head from "next/head"
import Link from "next/link"
import {motion} from "framer-motion"
import styles from "../styles/Skills.module.scss"
import {AiOutlineCaretLeft} from "react-icons/ai"


export default function skills() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Meine Skills</title>
        </Head>
        <motion.div 
        initial={{x: "-100px", opacity: 0}}
        animate={{x: 0, opacity:1}}
        className={styles.back}
        transition={{duration: "0.4"}}>
            <Link href="/">
            <AiOutlineCaretLeft />
            </Link>
        </motion.div>
        <motion.div className={styles.text}
        initial={{x: "-100px", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: "0.4"}}>
        <h2 className={styles.H2}>Meine Skills:</h2>
        <p className={styles.p}>Wie schon in der <Link href="/about"><a className={styles.Link}>About</a></Link>-Page genannt bin ich ein Websiten - und App-Developer. Ich kenne mich nur ein bisschen aus mit dem developen von mobilen Apps. Ich möchte mich aber in dieser Branche auf jeden Fall weiterbilden, da ich es sehr spannend und interessant finde. Zurzeit mache ich fast alles mit der Javascript Libary "React". So zum Beispiel programmiere ich auch meine mobilen Apps. Dazu nutze ich aber auch noch ein weiteres Framework für Javascript: React-Native. Das basiert auf React, man hat die gleiche Syntax (Syntax beschreibt, wie man etwas programmiert. Also wie du den Code schreibst) wird aber später in Java umgewandedlt, damit man es auf einem Handy das Programm ausführen kann. Ich programmiere zurzeit auch mit einem weiteren Javascript Framework, namens Next Js. In diesem Framework hat man den vorteil, dass man auch die React Syntax benutzt, man hat ein super schnelles Seiten-laden. Ich habe übgrigens auch NextJs hierbei verwendet :) und man bekommt gute, vorgefertigte Komponenten.  </p>
      </motion.div>

    </div>
  )
}
