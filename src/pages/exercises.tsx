import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "../components/layout";
import { useAuth } from "../contexts/auth";
import { useFetch } from "../hooks/fetchData";
import { API_URL } from "../utils/constants";
import CreateExercise from "../components/create-exercise/createExercise";
import { UserExercise } from "../interfaces/interfaces";

export default function Dashboard() {
    const [openCreate, setOpenCreate] = useState(false);
    const router = useRouter();
    const auth = useAuth();
    const { status, error, data } = useFetch<UserExercise[]>(
        `${API_URL}/api/v1/userexercise`,
        "GET",
        [auth]
    );

    console.log(auth);
    console.log(data);

    if (auth.error) {
        router.push("/login");
    }

    if (auth.user) {
        return (
            <div>
                <Head>
                    <title>Exercises</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout>
                    <CreateExercise
                        close={() => {
                            setOpenCreate(false);
                        }}
                        isOpen={openCreate}
                    />
                    <div className="max-w-7xl mx-auto px-4">
                        <h1 className="text-2xl md:text-4xl text-headline font-headline my-3">
                            Meine Übungen
                        </h1>
                        <div
                            onClick={() => setOpenCreate(true)}
                            className="fixed w-14 h-14 z-50 rounded-full bottom-16  right-4 md:right-12 bg-primary flex items-center justify-center cursor-pointer"
                        >
                            <button className="font-headline text-headline text-xl">
                                +
                            </button>
                        </div>
                        <div>
                            {data ? (
                                <div>
                                    {data.length > 0 ? (
                                        <div>
                                            {data.map((d) => {
                                                return (
                                                    <div
                                                        key={d.id}
                                                        className="cursor-pointer px-3 py-3 bg-bgHighlight rounded-md mb-2"
                                                    >
                                                        <Link
                                                            href={`/exercises/${d.id}`}
                                                        >
                                                            <div>
                                                                <p className="text-headline font-text font-semibold">
                                                                    {
                                                                        d
                                                                            .exercise
                                                                            .name
                                                                    }
                                                                </p>
                                                                <p className="text-primary font-text  text-xs">
                                                                    {
                                                                        d
                                                                            .exercise
                                                                            .exerciseCategory
                                                                            .name
                                                                    }
                                                                </p>
                                                            </div>
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
