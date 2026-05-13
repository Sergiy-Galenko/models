import Image from "next/image";
import styles from "./PageTen.module.css";

export function PageTen() {
  return (
    <section className={styles.page} aria-labelledby="page-10-title">
      <p className={styles["page-10-kicker"]}>INTUITIVE DESIGN</p>

      <header className={styles["page-10-header"]}>
        <h2 id="page-10-title" className={styles["page-10-title"]}>
          As environmental concerns rise, designers are called upon to create
          eco-friendly products that minimize waste and consumption.
        </h2>
      </header>

      <div className={styles["page-10-number"]} aria-hidden="true" />

      <div className={styles["page-10-meta"]}>
        <span>design</span>
        <span>transform</span>
        <span>experience</span>
      </div>

      <div className={styles["page-10-image-frame"]}>
        <Image
          src="/images/page-10-main.png"
          alt="Editorial notebook spread"
          className={styles["page-10-image"]}
          width={1080}
          height={673}
        />
      </div>
    </section>
  );
}
