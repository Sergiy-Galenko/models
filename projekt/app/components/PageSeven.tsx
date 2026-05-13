import styles from "./PageSeven.module.css";

export function PageSeven() {
  return (
    <section className={styles.page} aria-labelledby="page-7-title">
      <header className={styles["page-7-header"]}>
        <h2 id="page-7-title" className={styles["page-7-title"]}>
          <span>SUSTAINABILITY IS ANOTHER CRITICAL ASPECT</span>
          <span>OF CONTEMPORARY DESIGN?</span>
        </h2>
      </header>

      <div className={styles["page-7-big-parts"]}>
        <div className={styles["page-7-barckets-container"]}>
          <h2 className={styles["page-7-barckets"]}>()</h2>
        </div>

        <div className={styles["page-7-number"]}>
          <h2>26</h2>
        </div>
      </div>

      <div className={styles["small-parts-page-7"]}>
        <div className={styles["int_des-page-7"]}>
          <h2>intuitive design</h2>
        </div>

        <div className={styles["now_text-page-7"]}>
          <h2>now</h2>
        </div>

        <div className={styles["time-page-7"]}>
          <h2>15:37</h2>
        </div>
      </div>

      <aside className={styles["page-7-side"]}>
        <p className={styles["page-7-date"]}>May, 2026</p>
        <p className={styles["page-7-main-copy"]}>
          This can involve using sustainable materials, optimizing production
          processes, and considering the product&apos;s lifecycle.
        </p>
        <p className={styles["page-7-sub-copy"]}>
          Ultimately, a responsible design approach not only benefits the planet
          but also resonates with consumers increasingly seeking ethical choices.
        </p>
      </aside>
    </section>
  );
}
