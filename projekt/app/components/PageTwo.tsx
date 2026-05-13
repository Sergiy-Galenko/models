import Image from "next/image";
import styles from "./PageTwo.module.css";

export function PageTwo() {
  return (
    <section className={styles.page} aria-labelledby="hero-title">
      <nav className={styles["page-2-nav"]} aria-label="Primary actions">
        <span>design</span>
        <span>transform</span>
        <span>experience</span>
      </nav>

      <div className={styles["page-2-stage"]}>
        <div className={styles["page-2-main"]}>
          <div className={styles["page2-main-top"]}>
            <span className={styles["page-2-wordmark-p"]}>P</span>
            <span className={styles["page-2-wordmark-racticality"]}>
              racticality
            </span>
            <span className={styles["page-2-wordmark-x"]}>x</span>
            <h2 id="hero-title" className={styles["page-2-wordmark-CREATIVITY"]}>
              CREATIVITY
            </h2>
          </div>

          <div className={styles["page-2-layout"]}>
            <article className={styles["page-2-copy"]}>
              <span className={styles["page-2-copy-line"]} aria-hidden="true" />
              <p className={styles["page-2-copy-text"]}>
                <span className={styles["page-2-text-span-dark"]}>
                  It is the bridge between creativity and practicality, where
                  form meets function.
                </span>
                <span className={styles["page-2-text-span-light"]}>
                  Designers must consider the target audience, the purpose of
                  the product, and the context of use to create effective
                  solutions.
                </span>
              </p>
              <span className={styles["page-2-copy-line"]} aria-hidden="true" />
            </article>

            <Image
              src="/images/hero-secondary-visual.png"
              alt="Secondary editorial visual"
              className={styles["page-2-media-image-secondary"]}
              width={256}
              height={200}
            />
          </div>
        </div>

        <Image
          src="/images/hero-main-visual.png"
          alt="Main editorial visual"
          className={styles["page-2-media-image-primary"]}
          width={255}
          height={640}
        />
      </div>
    </section>
  );
}
