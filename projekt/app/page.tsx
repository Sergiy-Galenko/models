import { PageEight } from "./components/PageEight";
import { PageFive } from "./components/PageFive";
import { PageFour } from "./components/PageFour";
import { PageNine } from "./components/PageNine";
import { PageOne } from "./components/PageOne";
import { PageSeven } from "./components/PageSeven";
import { PageSix } from "./components/PageSix";
import { PageTen } from "./components/PageTen";
import { PageThree } from "./components/PageThree";
import { PageTwo } from "./components/PageTwo";
import { Footer } from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
        <PageSix />
        <PageSeven />
        <PageEight />
        <PageNine />
        <PageTen />
        <Footer />
      </main>
    </div>
  );
}
