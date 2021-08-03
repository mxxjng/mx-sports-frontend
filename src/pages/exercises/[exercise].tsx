import Head from "next/head";

import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth";
import { useFetch } from "../../hooks/fetchData";
import { API_URL } from "../../utils/constants";
import Timer from "../../components/timer";

export default function Exercise() {
    const router = useRouter();
    const { exercise } = router.query;
    const auth: any = useAuth();
    const { response, error } = useFetch(
        `${API_URL}/api/v1/userexercise/${exercise}`,
        "GET",
        [auth, exercise]
    );

    console.log(auth);
    console.log(response);

    if (auth.error) {
        router.push("/login");
    }

    if (auth.user) {
        return (
            <div>
                <Head>
                    <title>Exercise</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout>
                    <div className="max-w-7xl mx-auto p-2">
                        <div>
                            <div className="flex items-center">
                                <Timer />
                                <Timer timerTime={120} />
                                <Timer timerTime={180} />
                            </div>
                            {response?.data ? (
                                <div>
                                    <h1 className="text-2xl text-headline font-bold">
                                        {response.data.exercise.name}
                                    </h1>
                                </div>
                            ) : (
                                <div>
                                    <p className="text-headline">loading...</p>
                                </div>
                            )}
                            {error && (
                                <div>
                                    <p className="text-headline">Error...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }

    return <div>loading...</div>;
}
