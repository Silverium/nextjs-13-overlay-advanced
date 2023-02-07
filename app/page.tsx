import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div>
      <main>
        <h2 >Goals</h2>
        <ul className={styles.grid}>
          <li className={styles.description}>
            When clicking a link like "*/login" we render the login modal keeping
            the same page as a background
          </li>
          <li className={styles.description}>
            When directly navigating into "*/login" we render the login modal and
            a selected page is rendered as a background
          </li>
          <li className={styles.description}>
            When closing the "login modal", we stay at the background layout
            page and it's not re-rendering
          </li>
          <li className={styles.description}>
            The "login modal" can be used from any path, like "/list/login" or
            "/gallery/login"
          </li>
        </ul>
        <h2>Limitations/Compromises</h2>
        <ul>
          <li>
            In order to support an "underlay" approach, we need to repeat the catch all folder (<code>[...all]</code>) with a route handler for modals as segments of the path.
            Example: "list/login" will render login overlay with list underneath, both server side, as far as we nest the <code>[...all]</code> folder inside <code>list</code> folder.
            When navigating from "list/login" to "login" with NextJs router, there is no reload of "list" page
          </li>
          <li>
            When rendering a segmented modal from root folder (like "/login"), if no underlay is specified, it only loads the overlay, with whatever <code>layout.js</code> is defined in <code>app</code> folder
          </li>
          <li>
            Hash (from <code>window.location</code>) is not part of server side code, so we need to create a <code>hashchange</code> handler, and navigate with
            HTML anchors <code>({`<a>`})</code> instead of <code>next/link {`<Link>`}</code> components. This could change in future versions, but it's not a big deal in any case
          </li>
        </ul>
      </main>
    </div>
  );
}
