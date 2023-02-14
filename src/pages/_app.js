import '@/styles/globals.css';
import Layout from 'components/layout';
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.StrictMode>
  );
}
