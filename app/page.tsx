import Head from 'next/head';
import styles from './page.module.css'; // Assume you have CSS modules set up
import {
  Navbar,
  Hero,
  Solution,
  Procurement,
  Confidence,
  Experience,
  BookDemo,
  Footer,
} from './components/landingPage';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Proqura</title>
        <meta name='description' content='procurement' />
      </Head>

      <main className={styles.main}>
        <div className='md:bg-artboard-md bg-no-repeat bg-right w-full bg-[#4031b7]'>
          <Navbar />
          <Hero styles={styles} />
        </div>
        <Solution />
        <Procurement />
        <Confidence />
        <Experience />
        <BookDemo />
        <Footer />
      </main>
    </div>
  );
}
