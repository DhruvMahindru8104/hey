import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/home/hero';
import Content from '../components/home/content';
import Footer from '../components/footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
      <Content/>
      <Footer/>
  
     </>
  );
}
