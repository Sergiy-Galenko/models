import Image from "next/image";
import styles from "./PageSix.module.css";

export function PageSix() {
  return (
    <section className={styles.page} aria-labelledby="editorial-title">
      <div className={styles["page-6-photo-frame"]}>
        <Image
          src="/images/page-6-main.png"
          alt="Editorial lifestyle visual"
          className={styles["page-6-photo"]}
          width={1027}
          height={773}
        />
      </div>

      <div className={styles["page-6-meta"]}>
        <p className={styles["page-6-meta-label"]}>VISUAL</p>
        <p className={styles["page-6-meta-label"]}>
          <span>TARGET</span>
          <span>AUDIENCE</span>
        </p>
        <p className={styles["page-6-meta-note"]}>
          <span>This.</span>
          <span>The user, UK</span>
        </p>
        <p className={styles["page-6-meta-copy"]}>
          <span>2026 Leads To Higher Satisfaction and</span>
          <span>better product&mdash;adoption!</span>
        </p>
      </div>

      <footer className={styles["page-6-footer"]}>
        <h2 id="editorial-title" className={styles["page-6-date"]}>
          May, 2026
        </h2>
      </footer>
    </section>
  );
}
