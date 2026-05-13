import Image from "next/image";
import styles from "./PageThree.module.css";

export function PageThree() {
  return (
    <section className={styles.page}>
      <div className={styles["page-3-top-visual"]}>
        <Image
          src="/images/page-3-main-1.png"
          alt="Editorial portrait"
          className={styles["page-3-top-image"]}
          width={1170}
          height={767}
        />
      </div>

      <nav className={styles["page-3-top-menu"]} aria-label="Primary actions">
        <span>design</span>
        <span>transform</span>
        <span>experience</span>
      </nav>

      <article className={styles["page-3-copy"]}>
        <p>
          This can involve using sustainable materials, optimizing production
          processes, and considering the product&apos;s lifecycle. Ultimately, a
          responsible design approach not only benefits the planet.
        </p>
      </article>

      <div className={styles["page-3-bottom-visual"]}>
        <Image
          src="/images/page-3-main-2.png"
          alt="Reclining editorial portrait"
          className={styles["page-3-bottom-image"]}
          width={1170}
          height={377}
        />
        <h2 className={styles["page-3-bottom-title"]}>USER-CENTERED DESIGN</h2>
      </div>
    </section>
  );
}
