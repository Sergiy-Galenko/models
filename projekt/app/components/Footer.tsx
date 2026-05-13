import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-top"]}>
        <div className={styles["footer-brand"]}>
          <div className={styles["footer-logo"]}>Maison</div>
          <div className={styles["footer-tagline"]}>
            Intuitive design for the modern world.
          </div>
          <div className={styles["footer-email"]}>hello@maison.studio</div>
          <div className={styles.socials}>
            <div className={styles["social-btn"]}>
              <div className={styles["social-label"]}>Ig</div>
            </div>
            <div className={styles["social-btn"]}>
              <div className={styles["social-label"]}>Tw</div>
            </div>
            <div className={styles["social-btn"]}>
              <div className={styles["social-label"]}>Be</div>
            </div>
            <div className={styles["social-btn"]}>
              <div className={styles["social-label"]}>Li</div>
            </div>
          </div>
        </div>

        <div className={styles["footer-col"]}>
          <div className={styles["footer-col-title"]}>Navigate</div>
          <div className={styles["footer-links"]}>
            <div className={styles["footer-link"]}>Catalog</div>
            <div className={styles["footer-link"]}>Editorial</div>
            <div className={styles["footer-link"]}>About us</div>
            <div className={styles["footer-link"]}>Contact</div>
          </div>
        </div>

        <div className={styles["footer-col"]}>
          <div className={styles["footer-col-title"]}>Account</div>
          <div className={styles["footer-links"]}>
            <div className={styles["footer-link"]}>Sign in</div>
            <div className={styles["footer-link"]}>Create account</div>
            <div className={styles["footer-link"]}>Profile</div>
            <div className={styles["footer-link"]}>Favorites</div>
            <div className={styles["footer-link"]}>Settings</div>
          </div>
        </div>

        <div className={styles["footer-col"]}>
          <div className={styles["footer-col-title"]}>Info</div>
          <div className={styles["footer-links"]}>
            <div className={styles["footer-link"]}>Privacy policy</div>
            <div className={styles["footer-link"]}>Terms of service</div>
            <div className={styles["footer-link"]}>Cookie policy</div>
            <div className={styles["footer-link"]}>Support</div>
          </div>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <div className={styles["footer-copy"]}>© 2026 Maison. All rights reserved.</div>
        <div className={styles["footer-legal"]}>
          <div className={styles["footer-legal-link"]}>Privacy</div>
          <div className={styles["footer-legal-link"]}>Terms</div>
          <div className={styles["footer-legal-link"]}>Cookies</div>
        </div>
      </div>
    </footer>
  );
}
