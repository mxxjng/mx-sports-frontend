import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="relative h-screen overflow-hidden ">
                <Layout>
                    <div className="max-w-7xl mx-auto px-4 ">
                        <div className="mt-20 max-w-3xl">
                            <p className="text-primary text-sm">MX SPORTS</p>
                            <h1 className="text-3xl md:text-6xl text-headline font-headline my-2 hl">
                                Behalte deinen Trainingsfortschritt immer im
                                Blick
                            </h1>
                            <p className="my-4 max-w-md mb-0 md:mb-12">
                                Mit MX Sports hast du alle deine Rezepte und
                                Trainings an einem Ort. Lege jetzt direkt los!
                            </p>
                            <div>
                                <div className="mt-6">
                                    <Link href="/login">
                                        <span className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md border border-primary mr-2 cursor-pointer">
                                            Anmelden
                                        </span>
                                    </Link>
                                    <Link href="/register">
                                        <span className="w-full mb-2 text-headline px-4 py-2 font-headline rounded-md bg-primary cursor-pointer">
                                            Registrieren
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-glow"></div>
                </Layout>
            </div>
        </div>
    );
}
