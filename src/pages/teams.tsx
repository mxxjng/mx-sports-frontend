import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Teams from "../components/teams";

export default function TeamPage() {
  return (
    <div>
      <Head>
        <title>Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h1 className="sm:text-lg md:text-3xl text-headline font-headline mb-4">
            Teams
          </h1>
        </div>
      </Layout>
    </div>
  );
}
