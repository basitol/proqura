import Head from 'next/head';
import styles from './page.module.css'; // Assume you have CSS modules set up
import {Navbar, Hero, Solution} from './components/landingPage';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Proqura</title>
        <meta name='description' content='procurement' />
      </Head>

      <main className={styles.main}>
        <Navbar styles={styles} />
        <Hero styles={styles} />
        <Solution />
      </main>
    </div>
  );
}
