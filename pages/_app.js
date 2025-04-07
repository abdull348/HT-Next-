'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../style/globals.css';
import Layout from '../app/layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Havana Tech - Digital Agency</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
