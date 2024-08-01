import Link from "next/link";
import styles from "./page.module.css"

export default function Home() {
    return (
      <>
        <header className={styles.header}>
          <div className={styles.slideshow}></div>
          <div>
            <div className={styles.hero}>
              <h1>Cita Rasa untuk penikmat cita rasa Nusantara</h1>
              <p>Nikmati dan bagikan cita rasa Nusantara</p>
            </div>
            <div className={styles.cta}>
              <Link href={"/komunitas"}>Bergabung Komunitas</Link>
              <Link href={"/hidangan"}>Temukan Hidangan</Link>
            </div>
          </div>
        </header>
        <main>
          <section className={styles.section}>
            <h2>Bagaimana cara kerjanya?</h2>
            <p>Cita Rasa adalah platform di mana para pecinta makanan berbagi resep masakan favoritnya kepada seluruh duni. Ini tempat di mana kita bisa menemukan resep baru dan terhubung dengan orang lain.</p>
            <p>
              Cita Rasa adalah tempat untuk menemukan resep baru dan terhubung dengan orang lain.
            </p>
          </section>
          <section className={styles.section}>
          <h2>Bagaimana cara kerjanya?</h2>
            <p>Cita Rasa adalah platform di mana para pecinta makanan berbagi resep masakan favoritnya kepada seluruh duni. Ini tempat di mana kita bisa menemukan resep baru dan terhubung dengan orang lain.</p>
            <p>
              Cita Rasa adalah tempat untuk menemukan resep baru dan terhubung dengan orang lain.
            </p>
          </section>
        </main>
      </>
    );
  }