import styles from "../styles/Home.module.css";

export default async function Segment2000() {
  await new Promise((r) => setTimeout(r, 2000));
  return <h2 className={styles.description}>Segment delayed for 2000 ms</h2>;
}
