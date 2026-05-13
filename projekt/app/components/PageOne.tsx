import Image from "next/image";
import { classNames } from "../lib/classNames";
import styles from "./PageOne.module.css";

export function PageOne() {
  return (
    <section className={styles.page} aria-labelledby="intuitive-design-title">
      <header className={styles["page-1__header"]}>
        <h1 id="intuitive-design-title" className={styles["page-1__title"]}>
          <span>INTUITIVE</span>
          <span>DESIGN</span>
        </h1>
      </header>

      <div className={styles["page-1__dates"]} aria-label="Date comparison">
        <span
          className={classNames(
            styles["page-1__date"],
            styles["page-1__date--left"],
          )}
        >
          May, 2025
        </span>
        <span
          className={classNames(
            styles["page-1__date"],
            styles["page-1__date--right"],
          )}
        >
          May, 2026
        </span>
      </div>

      <div className={styles.ticket}>
        <div className={styles["page-1-ticket-top"]}>
          <Image
            src="/images/main-bg-ticket-page-1.png"
            alt="Decorative ticket background"
            className={styles["main-bg-ticket-page-1"]}
            width={675}
            height={1200}
            preload
          />
          <Image
            src="/images/model-page-1.png"
            alt="Fashion model standing inside the ticket"
            className={styles["page-1-model"]}
            width={765}
            height={1347}
            preload
          />
        </div>

        <div className={styles["page-1-bottom-ticket"]}>
          <Image
            className={styles["down-ticket-part"]}
            src="/images/down-ticket-part.png"
            alt="Bottom of the ticket"
            width={397}
            height={418}
          />
          <Image
            src="/images/qr-page-1.png"
            alt="Decorative QR code"
            className={styles["qr-page-1"]}
            width={2647}
            height={946}
          />
        </div>
      </div>

      <div className={styles["page-1__text-parent"]}>
        <p
          className={classNames(
            styles["page-1__text"],
            styles["page-1__text-lines"],
          )}
        >
          <span>This can involve using sustainable materials, optimizing</span>
          <span>
            production processes, and considering the product&apos;s lifecycle.
            Ultimately,
          </span>
          <span>
            a responsible design approach not only benefits the planet but also
            resonates with consumers
          </span>
          <span>
            increasingly seeking ethical choices.{" "}
            <strong>
              Sustainability is another critical aspect of contemporary design!
            </strong>
          </span>
        </p>
      </div>
    </section>
  );
}
