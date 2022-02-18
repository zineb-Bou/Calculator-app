import Head from 'next/head';
import * as React from 'react';
import Header from '../components/header';
import Calculator from '../components/calculator';
import { useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const handleChange = (theme) => {
    setTheme(theme);
  };
  return (
    <>
      <Head>
        <title>Calculator app</title>
        <meta name="description" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="container" data-theme={theme}>
        <Header handleChange={handleChange} />
        <Calculator />
      </div>
    </>
  );
}
