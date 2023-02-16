import styles from "@/styles/Home.module.css";

export default async function Segment3000() {
  await new Promise((r) => setTimeout(r, 3000));
  return <h2 className={styles.description}>Segment delayed for 3000 ms</h2>;
}
