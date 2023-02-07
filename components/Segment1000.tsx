import styles from "../styles/Home.module.css";
export const dynamic = "force-dynamic";

export default async function Segment1000() {
  await new Promise((r) => setTimeout(r, 1000));
  return (
    <div>
      <h2 className={styles.description}>Segment delayed for 1000 ms</h2>
    </div>
  );
}
