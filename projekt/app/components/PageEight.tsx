import Image from "next/image";
import styles from "./PageEight.module.css";

export function PageEight() {
  return (
    <section className={styles.page} aria-labelledby="page-8-text-main">
      <div className={styles["page-8-card-first"]}>
        <div className={styles["page-8-note-first"]}>intuitive design</div>
        <div className={styles["page-8-photo-first"]}>
          <Image
            src="/images/page-8-first.png"
            alt="Outdoor editorial portrait"
            width={255}
            height={200}
          />
        </div>
        <div className={styles["page-8-note-bottom"]}>
          <span>now</span>
          <span>15:37</span>
        </div>
      </div>

      <div className={styles["page-8-card-tall"]}>
        <div className={styles["page-8-card-top-copy"]}>
          <p className={styles["page-8-top-copy"]}>
            Ultimately, a responsible design approach not only benefits but also
            resonates.
          </p>
        </div>
        <div className={styles["page-8-photo-tall"]}>
          <Image
            src="/images/page-8-tall.png"
            alt="Standing portrait"
            width={255}
            height={420}
          />
        </div>
      </div>

      <div className={styles["page-8-card-mid"]}>
        <div className={styles["page-8-photo-mid"]}>
          <Image
            src="/images/page-8-mid.png"
            alt="Editorial portrait in garden"
            width={255}
            height={319}
          />
        </div>
        <p id="page-8-text-main" className={styles["page-8-middle-copy"]}>
          In the modern world, user-centered design has gained immense
          popularity.
        </p>
      </div>

      <div className={styles["page-8-card-right"]}>
        <div className={styles["page-8-note-top"]}>
          <span>soon</span>
          <span>20 &mdash; 09</span>
        </div>
        <div className={styles["page-8-note-right"]}>
          eco-friendly products
        </div>
        <div className={styles["page-8-photo-small-right"]}>
          <Image
            src="/images/page-8-right.png"
            alt="Reclining portrait"
            width={254}
            height={200}
          />
        </div>
      </div>

      <div className={styles["page-8-card-bottom-copy"]}>
        <p className={styles["page-8-bottom-copy"]}>
          This approach prioritizes the need and preferences of the enduser
          through the design process.
        </p>
      </div>
    </section>
  );
}
