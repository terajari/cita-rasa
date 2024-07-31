import Link from "next/link";

export default function Home() {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Waktunya dimulai!
        </h1>
        <p><Link href={"/hidangan"}>Hidangan</Link></p>
        <p><Link href={"/hidangan/shares"}>Bagikan Hidangan</Link></p>
        <p><Link href={"/komunitas"}>Komunitas</Link></p>
      </main>
    );
  }