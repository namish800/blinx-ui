/***
 *
 * @file app/page.tsx
 * @description Home page for Blinx.ai.
 * @author Satyam Mahajan
 * @organization KreativX
 * @since 21 Sep 2024
 *
 */



import Image from "next/image";
import styles from "./page.module.css";
import RecentSection from "@/components/RecentSection";
import AnalyticSection from "@/components/AnalyticsSection";

export default function Home() {
  return (
    <div className={`poppins ${styles.page}`}>
      <main className={styles.main}>
        <div className="landing-banner">
          {/* <Image 

          /> */}
          <button>Brand Persona</button>
        </div>
        <RecentSection />
        <AnalyticSection />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
