import '../styles/globals.css'
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Router from "next/router";
import nProgress from "nprogress";
import "../styles/globals.css";
import "../styles/nprogress.css";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';
import NProgress from 'nprogress';


export default function App({ Component, pageProps }) {
  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P7W9R40C3D" strategy='' />

      <Script id="google-analytics" strategy=''>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-P7W9R40C3D');`}
      </Script>

      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
