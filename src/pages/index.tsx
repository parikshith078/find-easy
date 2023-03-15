import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import Footer from "@/components/header/Fotter";

export default function Home() {
  const Card = () => {
    return (
      <div className={styles.card}>
        <div className={styles.cardInfo}>
          <div className={styles.cardTitleSec}>
            <a href="#" className={styles.cardTitle}>
              Fauxica Sport
            </a>
            <p className={styles.cardSubtitle}>Running shoe</p>
          </div>
          <p className={styles.price}>₹ 50</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Find Easy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: Add favIcon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <div className="wrapper">
          <Header />
          <div className="filler"></div>
          <Footer />
        </div>
      </main>
    </>
  );
}