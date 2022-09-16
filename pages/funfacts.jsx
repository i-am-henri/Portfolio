import {motion, useScroll} from "framer-motion"
import Link from "next/link"
import Head from "next/head"
import styles from "../styles/Funfacts.module.scss"
import {AiOutlineCaretLeft} from "react-icons/ai"

export default function Funfacts() {
  return (
    <div className={styles.container}>
        {/* Der Head */}
        <Head>
            <title>Funfacts</title>
            <meta name="desciption" content="Hi, ich bin Henri und das ist die Funfacts-Seite meines Portfolios. xD" />
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
        <motion.div 
        initial={{opacity: 0, x: "-100"}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5}}
        className={styles.content}>
        <h2>Noch ein paar Informationen über mein Portfolio...</h2>
        <p>Zunächst habe ich das ganze selber programmiert, währenddessen Spotify gehört und mir überlegt, wie man das noch ein bisschen 
        besser machen könnte. Nun kam ich zu dem Entschluss, das ich das ganze in den blau - und rot-tönen lasse. Ich finde das so garnicht 
        mal so schlecht. Und falls du dich gefragt hast, wie ich die <b>Animationen</b> auf dieser Website erstellt habe, kann ich auch das
        gerne beantworten. Ich habe die Animationen mit einer Javascript (React) Libary gemacht. Diese heißt <code>framer-motion</code> und 
        finde ich persönlich nicht schlecht. Die meisten Animationen bestehen daraus, das ich die die Position um 100 Pixel nach links verschoben 
        habe und die sichtbarkeit geändert habe. So entstand der coole <b>Fide-In</b> Effekt. Am liebsten habe ich Abends an meiner Website gesessen, 
        da ich da einfach am meisten Lust darauf hatte weiter zu programmieren und ich auch noch den Rest von Kreativität in mir verbrennen musste bevor 
        ich schlafen ging. Die ganzen zurück-Buttons sind übrigens von der "React-Icons"-Libary für React-Icons. Hier auch nochmal ein Link zu den Icons, damit ihr diese 
        auch in euren Projekten benutzen könnt: <a href="https://react-icons.github.io/react-icons/icons?name=ai" className={styles.Links}>hier clicken</a>. 
        Das hört sich irgendwie wie Werbung an. Soll es aber nicht sein. <b>#thatsNotAWerbung </b></p>
        </motion.div>
    </div>
  );
}
