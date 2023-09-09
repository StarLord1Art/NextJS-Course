import Link from "next/link";
import styles from "../styles/A.module.css";

export default function ({ text, href }) {
  return (
    <Link href={href}>
      <h2 className={styles.link}>{text}</h2>
    </Link>
  );
}
