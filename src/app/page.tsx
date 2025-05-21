// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import MatrixBackground from './components/MatrixBackground';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Matrix Effect - Next.js</title>
        <meta name="description" content="Matrix effect with Three.js in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <MatrixBackground />
        
      </main>
    </div>
  );
}