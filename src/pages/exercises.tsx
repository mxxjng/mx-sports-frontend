import Head from "next/head";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth";
import { useFetch } from "../hooks/fetchData";
import { API_URL } from "../utils/constants";
import Link from "next/link";
import { useState } from "react";
import CreateExercise from "../components/create-exercise/createExercise";

export default function Dashboard() {
    const [openCreate, setOpenCreate] = useState(false);
    const router = useRouter();
    const auth: any = useAuth();
    const { response, error } = useFetch(
        `${API_URL}/api/v1/userexercise`,
        "GET",
        [auth]
    );

    console.log(auth);
    console.log(response);

    if (auth.error) {
        router.push("/login");
    }

    let exercises;

    if (auth.user) {
        return (
            <div>
                <Head>
                    <title>Exercises</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout>
                    {openCreate && (
                        <CreateExercise
                            close={() => {
                                setOpenCreate(false);
                            }}
                        />
                    )}
                    <div className="max-w-7xl mx-auto p-2">
                        <h1 className="text-2xl md:text-4xl text-headline font-headline my-2">
                            Meine Übungen
                        </h1>
                        <div
                            onClick={() => setOpenCreate(true)}
                            className="fixed w-14 h-14 z-50 rounded-full bottom-16 right-4 gradient-bg flex items-center justify-center"
                        >
                            <button className="font-bold text-headline text-xl">
                                +
                            </button>
                        </div>
                        <div>
                            {response?.data ? (
                                <div>
                                    {response.data.length > 0 ? (
                                        <div>
                                            {response.data.map((d) => {
                                                return (
                                                    <div
                                                        key={d.id}
                                                        className="cursor-pointer p-2 bg-bgHighlight rounded-md mb-2"
                                                    >
                                                        <Link
                                                            href={`/exercises/${d.id}`}
                                                        >
                                                            <p className="text-headline">
                                                                {
                                                                    d.exercise
                                                                        .name
                                                                }
                                                            </p>
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <p className="text-headline">
                                            Noch keine Übungen angelegt. Lege
                                            jetzt eine Übung an
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <p>loading....</p>
                            )}
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }

    return <div>loading...</div>;
}
