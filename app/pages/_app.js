import Head from 'next/head';
import './globals.css';
import Layout from './components/layout';

function MyApp({ Component, pageProps }) {
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
