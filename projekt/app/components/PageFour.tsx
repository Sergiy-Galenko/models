import Image from "next/image";
import { classNames } from "../lib/classNames";
import styles from "./PageFour.module.css";

export function PageFour() {
  return (
    <section className={styles.page} aria-labelledby="sustainability-title">
      <div
        className={classNames(
          styles["page-4-line"],
          styles["page-4-line-top"],
        )}
      />

      <div className={styles["page-4-image-wrap"]}>
        <Image
          src="/images/page-4-botanical.png"
          alt="Decorative botanical visual"
          className={styles["page-4-image"]}
          width={256}
          height={598}
        />
      </div>

      <header className={styles["page-4-header"]}>
        <h2 id="sustainability-title" className={styles["page-4-title"]}>
          SUSTAINABILITY
        </h2>
      </header>

      <div className={styles["page-4-intro"]}>
        <p className={styles["page-4-intro-left"]}>
          <span className={styles["page-4-span1"]}>This can involve</span>
          <span className={styles["page-4-span2"]}>using sustainable</span>
          <span className={styles["page-4-span3"]}>materials, optimizing</span>
          <span className={styles["page-4-span4"]}>production processes,</span>
        </p>
        <p className={styles["page-4-intro-right"]}>
          Ultimately, a responsible design approach not only benefits the planet
          but also resonates with consumers increasingly seeking ethical choices.
        </p>
        <p
          className={classNames(
            styles["page-4-intro-left"],
            styles["page-4-intro-left-bottom"],
          )}
        >
          <span className={styles["page-4-span5"]}> and considering</span>
          <span className={styles["page-4-span6"]}>
            the product&apos;s lifecycle.
          </span>
        </p>
      </div>

      <article className={styles["page-4-body"]}>
        <p>
          Sustainability is another critical aspect of contemporary design. As
          environmental concerns rise, designers are called upon to create
          eco-friendly products that minimize waste and consumption. This can
          involve using sustainable materials, optimizing production processes,
          and considering the product!
        </p>
      </article>

      <div
        className={classNames(
          styles["page-4-line"],
          styles["page-4-line-bottom"],
        )}
      />
    </section>
  );
}
