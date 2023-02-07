import styles from "../styles/Home.module.css";
import Card from "./Card";


export default async function ListPageBody() {
  await new Promise(r => setTimeout(r, 3000));
  return (
    <div>
      <main>
        <h2 className={styles.description}>List page title</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1rem",
        }}>

        {Array.from({ length: 2 }, (_, i) => (
          <Card key={i} />
          ))}
          </div>
      </main>
    </div>
  )
}