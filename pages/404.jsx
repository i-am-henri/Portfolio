import React from 'react'
import Head from "next/head"
import Link from 'next/link'
import styles from "../styles/Error.module.scss"
import useRouter from "react"
export default function Error() {
  return (
    <div className={styles.container}>
      <h1 className={styles.H1}>404</h1>
      <h2 className={styles.H2}>Deine angeforderte Seite wurde leider nicht gefunden. Vielleicht willst du wieder zurück zur Homepage? Naja <Link href="/"><a className={styles.Link}>hier</a></Link> geht es zur Homepage. :)</h2>
    </div>
  )
}
