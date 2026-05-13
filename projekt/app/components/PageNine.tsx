import Image from "next/image";
import { classNames } from "../lib/classNames";
import styles from "./PageNine.module.css";

export function PageNine() {
  return (
    <section className={styles.page} aria-labelledby="page-9-title">
      <header className={styles["page-9-header"]}>
        <h2 id="page-9-title" className={styles["page-9-title"]}>
          Design solutions
        </h2>
      </header>

      <div className={styles["page-9-visual"]}>
        <figure className={styles["page-9-main-image-frame"]}>
          <Image
            src="/images/page-9-image.png"
            alt="Editorial fashion collage"
            className={styles["page-9-main-image"]}
            width={1200}
            height={486}
          />
        </figure>
      </div>

      <div className={styles["page-9-copy-grid"]}>
        <article
          className={classNames(
            styles["page-9-copy"],
            styles["page-9-copy-left-top"],
          )}
        >
          <p>
            Design is not merely about aesthetics; it encompasses functionality,
            usability, and emotional connection.
          </p>
        </article>

        <div
          className={classNames(
            styles["page-9-copy"],
            styles["page-9-copy-right"],
          )}
        >
          <div className={styles["page-9-copy-right-top"]}>
            <h3 className={styles["page-9-subtitle"]}>
              User-centered design
            </h3>
          </div>
          <p className={styles["page-9-copy-right-body"]}>
            It is the bridge between creativity and practicality, where form
            meets function. Designers must consider the target audience, the
            purpose of the product, and the context of use to create effective
            solutions.
          </p>
        </div>

        <article
          className={classNames(
            styles["page-9-copy"],
            styles["page-9-copy-left-bottom"],
          )}
        >
          <p>
            A well-thought-out design can transform a mundane object into a
            captivating experience.
          </p>
        </article>
      </div>
    </section>
  );
}
