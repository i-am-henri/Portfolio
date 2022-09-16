import Link from "next/link"
import styles from "../styles/BlogCard.module.scss"


export default function componentName(props) {
  return (
    <Link >
        <div className={styles.container}>
            <h2 className={styles.title}>{props.titel}</h2>
            <p>{props.shortText}</p>
        </div>
    </Link>
  );
}
