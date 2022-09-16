import { motion } from "framer-motion"
import Link from "next/link"
import styles from "../styles/ProjektCard.module.scss"

export default function projektCard(props) {
  const name = props.name
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.3}}
    className={styles.container}>
    <Link href={`projekte/${name}`}>
      <div>
        <p className={styles.nummer}>{props.nummer}.</p>
        <h2 className={styles.name}>{props.name}</h2>
        <p className={styles.beschreibung}>{props.shortBeschreibung}</p>
      </div>
    </Link>
    </motion.div>
  )
}
