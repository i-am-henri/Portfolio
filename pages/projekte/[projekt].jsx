import {useRouter} from "next/router"
import Link from "next/link"
import Head from "next/head"
import styles from "../../styles/ProjektSite.module.scss"
import {motion} from "framer-motion"
import jsondb from "../../json/projekts"
import Error from "../404"

export default function projekt() {
  const router = useRouter();
  const {name} = router.query
  console.log(router.query)
  const projekt = jsondb.projekte.find((a) => a.name === router.query)

  if (!projekt) {
    return (
      <Error/>
    )
  } 

  return (
    <div className={styles.container}>
      <p>{projekt.name} </p>
    </div>
  )
  
}
