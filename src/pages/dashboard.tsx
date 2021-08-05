import Head from "next/head";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth";

export default function Dashboard() {
    const router = useRouter();
    const auth: any = useAuth();

    console.log(auth);

    if (auth.error) {
        router.push("/login");
    }

    if (auth.user) {
        return (
            <div>
                <Head>
                    <title>Dashboard</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout>
                    <div className="max-w-7xl mx-auto px-4 mb-40">
                        <h1 className="text-2xl md:text-4xl text-headline font-headline my-2">
                            Willkommen {auth.user.firstName}{" "}
                            {auth.user.lastName}
                        </h1>
                    </div>
                </Layout>
            </div>
        );
    }

    return <div>loading...</div>;
}
