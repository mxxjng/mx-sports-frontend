import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';

import Image from 'next/image';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-5xl mx-auto text-center p-2">
          <h1 className="text-2xl md:text-4xl text-center text-headline font-headline my-2">
            Login
          </h1>
        </div>
      </Layout>
    </div>
  );
}
