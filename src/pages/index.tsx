import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="max-w-5xl mx-auto text-center p-2">
                    <h1 className="text-2xl md:text-4xl text-center text-headline font-headline my-2">
                        Home
                    </h1>
                </div>
            </Layout>
        </div>
    );
}
