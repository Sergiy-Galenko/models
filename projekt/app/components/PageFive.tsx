import Image from "next/image";
import { classNames } from "../lib/classNames";
import styles from "./PageFive.module.css";

export function PageFive() {
  return (
    <section className={styles.page}>
      <div
        className={classNames(
          styles["page-5-photo"],
          styles["page-5-photo-left"],
        )}
      >
        <Image
          src="/images/page-5-top-left-image.png"
          alt="Editorial portrait"
          className={styles["page-5-photo-image"]}
          width={735}
          height={919}
        />
      </div>

      <article
        className={classNames(
          styles["page-5-block"],
          styles["page-5-block-top"],
        )}
      >
        <span className={styles["page-5-block-number"]}>
          (<span className={styles.numberone}>01</span>)
        </span>
        <h2 className={styles["page-5-block-title"]}>FUNCTIONALITY</h2>
        <p
          className={classNames(
            styles["page-5-block-copy"],
            styles["page-5-block-copy--wide"],
          )}
        >
          In the modern world, user-centered design has gained immense
          popularity. This approach prioritizes the needs and preferences of the
          end-user throughout the design process. By conducting thorough research
          and testing, designers can ensure their creations are not only visually
          appealing but also intuitive and easy to use.
        </p>
      </article>

      <article
        className={classNames(
          styles["page-5-block"],
          styles["page-5-block-middle"],
        )}
      >
        <span className={styles["page-5-block-number"]}>
          (<span className={styles.numbertwo}>02</span>)
        </span>
        <h2 className={styles["page-5-block-title"]}>AESTHETICS</h2>
        <p
          className={classNames(
            styles["page-5-block-copy"],
            styles["page-5-block-copy--narrow"],
          )}
        >
          Design is not merely about aesthetics; it encompasses functionality,
          usability, and emotional connection.
        </p>
      </article>

      <div
        className={classNames(
          styles["page-5-photo"],
          styles["page-5-photo-right"],
        )}
      >
        <Image
          src="/images/page-5-right-center-image.png"
          alt="Editorial portrait on sofa"
          className={styles["page-5-photo-image"]}
          width={750}
          height={1000}
        />
      </div>

      <div
        className={classNames(
          styles["page-5-photo"],
          styles["page-5-photo-bottom-left"],
        )}
      >
        <Image
          src="/images/page-5-bottom-left-image.png"
          alt="Editorial portrait in doorway"
          className={styles["page-5-photo-image"]}
          width={736}
          height={909}
        />
      </div>

      <article
        className={classNames(
          styles["page-5-block"],
          styles["page-5-block-bottom"],
        )}
      >
        <span className={styles["page-5-block-number"]}>
          (<span className={styles.numberthree}>03</span>)
        </span>
        <h2 className={styles["page-5-block-title"]}>SUSTAINABILITY</h2>
        <p
          className={classNames(
            styles["page-5-block-copy"],
            styles["page-5-block-copy--medium"],
          )}
        >
          This can involve using sustainable materials, optimizing production
          processes, and considering the product&apos;s lifecycle.
        </p>
        <p
          className={classNames(
            styles["page-5-block-copy"],
            styles["page-5-block-copy--medium"],
          )}
        >
          Ultimately, a responsible design approach not only benefits the planet
          but also resonates with consumers increasingly seeking ethical choices.
        </p>
      </article>
    </section>
  );
}
