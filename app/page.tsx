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
import Link from "next/link";
import blinxCover from '@/app/assets/images/blinxCover.png'

export default function Home() {
  return (
    <div className={`poppins ${styles.landingPage}`}>
      <main className={styles.main}>
        <div className={styles.landingBanner}>
          <Image 
            src={blinxCover}
            alt="cover background"
            fill
            className={styles.landingImage}
          />
          {/* <Link href="/persona"><button className={styles.brandButton}>Add Brand Persona</button></Link> */}
        </div>
        <h1>Common Content Types</h1>
        <div className={styles.commonContents}>
          <Link href="/ad-generator" >
            <div className={styles.contentType}>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect width="100" height="100" rx="10" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M11 17.1649C14.3137 17.1649 17 14.4786 17 11.1649C17 7.8512 14.3137 5.16491 11 5.16491C7.68629 5.16491 5 7.8512 5 11.1649C5 14.4786 7.68629 17.1649 11 17.1649Z" fill="black" fillOpacity="0.08"></path><rect x="20" y="5.16491" width="16" height="4" rx="2" fill="black" fillOpacity="0.08"></rect><rect x="38" y="5.16491" width="6" height="4" rx="2" fill="black" fillOpacity="0.08"></rect><rect x="20" y="11.1649" width="42" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="20" y="15.1649" width="7" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="29" y="15.1649" width="2" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="5" y="20.1649" width="90" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="5" y="24" width="90" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="5" y="27.8351" width="60" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="5" y="32.8351" width="89" height="62" rx="5" fill="black" fillOpacity="0.08"></rect></svg>
              <p className={styles.contentTypeName}>Facebook Ads</p>
            </div>
          </Link>
          <Link href="/post-generator" >
            <div className={styles.contentType}>
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect width="100" height="100" rx="10" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M11 17.1649C14.3137 17.1649 17 14.4786 17 11.1649C17 7.8512 14.3137 5.16491 11 5.16491C7.68629 5.16491 5 7.8512 5 11.1649C5 14.4786 7.68629 17.1649 11 17.1649Z" fill="black" fillOpacity="0.08"></path><rect x="20" y="5.16491" width="16" height="4" rx="2" fill="black" fillOpacity="0.08"></rect><rect x="38" y="5.16491" width="6" height="4" rx="2" fill="black" fillOpacity="0.08"></rect><rect x="20" y="11.1649" width="42" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="20" y="15.1649" width="7" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="29" y="15.1649" width="2" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="5" y="20.1649" width="90" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="5" y="24" width="90" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="5" y="27.8351" width="60" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="5" y="32.8351" width="89" height="62" rx="5" fill="black" fillOpacity="0.08"></rect></svg>
              <p className={styles.contentTypeName}>Insta Posts</p>
            </div>
          </Link>
          <Link href="/blog-generator" >
            <div className={styles.contentType}>
              <svg width="100" height="135" viewBox="0 0 100 135" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_181_30)"><rect width="100" height="135" rx="10" fill="white"></rect><rect x="15" y="11.9828" width="67.4561" height="4.59362" rx="2.29681" fill="black" fillOpacity="0.08"></rect><rect x="15" y="18.3444" width="45.9911" height="4.59362" rx="2.29681" fill="black" fillOpacity="0.08"></rect><rect x="15" y="26.6129" width="69.3242" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="15" y="30.3809" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="34.2159" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="39.958" width="69.3242" height="36" rx="2" fill="black" fillOpacity="0.08"></rect><rect x="15" y="79.6329" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="83.4679" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="87.303" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="93.0451" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="96.8802" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="100.715" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="106.457" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="110.292" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="114.127" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="119.869" width="26.6454" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect></g><defs><clipPath id="clip0_181_30"><rect width="100" height="135" rx="10" fill="white"></rect></clipPath></defs></svg>
              <p className={styles.contentTypeName}>Blog</p>
            </div>
          </Link>
          <Link href="/video-to-blog" >
            <div className={styles.contentType}>
              <svg width="100" height="135" viewBox="0 0 100 135" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="135" rx="10" fill="white"></rect><rect x="15" y="11.9828" width="67.4561" height="4.59362" rx="2.29681" fill="black" fillOpacity="0.08"></rect><rect x="15" y="18.3444" width="45.9911" height="4.59362" rx="2.29681" fill="black" fillOpacity="0.08"></rect><rect x="15" y="26.6129" width="69.3242" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="15" y="30.3809" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="34.2159" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="39.958" width="69.3242" height="53.207" rx="2" fill="black" fillOpacity="0.08"></rect><rect x="15" y="96.8399" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="100.675" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="104.51" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="110.252" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="114.087" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="15" y="117.922" width="69.3242" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect></svg>
              <p className={styles.contentTypeName}>Video to Blog</p>
            </div>
          </Link>
        </div>
        <RecentSection />
        <AnalyticSection />
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
