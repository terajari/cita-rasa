import Link from "next/link";
import logoImg from '@/assets/logo.png'
import Image from "next/image";
import styles from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
    return (
        <>
        <MainHeaderBackground />
        <header className={styles.header}>
            <Link className={styles.logo} href={"/"}><Image src={logoImg.src} alt="Hidangan makanan di meja" width={100} height={100}/>Cita Rasa</Link>
            <nav className={styles.nav}>
                <ul>
                    <li><Link href={"/hidangan"}>Hidangan</Link></li>
                    <li><Link href={"/komunitas"}>Komunitas</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}