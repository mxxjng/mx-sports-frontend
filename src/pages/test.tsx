import Head from "next/head";

import Button from "../components/Button";
import Layout from "../components/Layout";
import TimeIcon from "../components/Icons/TimeIcon";

export default function TestPage() {
    return (
        <div>
            <Head>
                <title>Timer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-2xl md:text-4xl text-headline font-headline my-2">
                        TestPage
                    </h1>
                    <div>
                        <div>
                            <Button color="secondary">Satz erstellen</Button>
                        </div>
                        <Button onClick={() => alert("hi")}>
                            Satz erstellen
                        </Button>
                        <Button loading={true}>Satz erstellen</Button>
                        <Button icon={<TimeIcon />}>Satz erstellen</Button>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
