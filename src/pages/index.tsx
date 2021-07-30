import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Test from "../components/teams";

import Image from "next/image";
import header from "../../public/website-header.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-5xl mx-auto text-center p-2">
          <Image
            src="/website-header.png"
            alt="header"
            width="1250"
            height="392"
          />
          <h1 className="text-2xl md:text-4xl text-center text-headline font-headline my-2">
            Welcome to Catch Football!
          </h1>
          <p className="text-textColor mb-2 max-w-lg mx-auto">
            We are providing Stats and News around the European League of
            Football. (This Site is still in development and things will change)
          </p>
          <Link href="/games">Explore Games</Link>
        </div>
      </Layout>
    </div>
  );
}
