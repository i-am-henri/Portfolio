import Head from "next/head" 
import styles from "../styles/Home.module.scss"
import Link from "next/link"
import { motion } from "framer-motion";
import { useRef } from "react";




export default function Home() {
  return (
    <motion.div>
      <Head>
        <title>
          Portfolio von Henri
        </title>
        <meta name="keywords" content="Portfolio, modern, Henri, Web-Development, programmieren, App-Developer, jung, cool, modern, Modernes Design, schöne Website, " />
        <meta name="description" content="Hi, ich bin Henri und das ist mein Portfolio." />
      </Head>
      {/* Der erste Eindruck */}
      <motion.div className={styles.erster_eindruck}>
        <motion.div 
        initial={{opacity: 0, x: "-100px"}}
        animate={{opacity: 100, x: 0}}
        transition={{duration: 0.3}}
        whileHover={{y: -10}}
        className={styles.TextContainer}>
          <h2 className={styles.Hi}>Hi, ...</h2>
          <p className={styles.AboutOneLine}>Ich bin Henri, 13 Jahre alt und ein Web- und Appdeveloper.</p>
          <p className={styles.trigger}>Meine ganze Geschichte findest du <Link href="/about"><a className={styles.linkToAbout}>hier.</a></Link></p>
        </motion.div>
        {/* Die weiteren Links */}
        <motion.div
        initial={{opacity: 0, x: "-100px"}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.4}}
        end={{opacity: 0, x: "-100px"}}
        className={styles.LinksContainer}>
          <Link href="/about"><a className={styles.Links}>About</a></Link>
          <Link href="/skills"><a className={styles.Links}>Skills</a></Link>
          <Link href="/projekte"><a className={styles.Links}>Projekte</a></Link>
          <Link href="/funfacts"><a className={styles.Links}>Funfacts</a></Link>
          </motion.div>
      </motion.div>
    </motion.div>
  );
};
