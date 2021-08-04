import Head from "next/head";

import Layout from "../components/layout";
import Timer from "../components/timer";

export default function TimerPage() {
    return (
        <div>
            <Head>
                <title>Timer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-2xl md:text-4xl text-headline font-headline my-2">
                        Timer
                    </h1>
                    <div className="flex items-center">
                        <Timer />
                        <Timer timerTime={120} />
                        <Timer timerTime={180} />
                    </div>
                </div>
            </Layout>
        </div>
    );
}
