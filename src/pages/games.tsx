import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Games from "../components/games";

export default function GamePage() {
  return (
    <div>
      <Head>
        <title>Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h1 className="text-2xl text-headline font-headline mb-2">Games</h1>
          <Games />
        </div>
      </Layout>
    </div>
  );
}
