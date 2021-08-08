import Head from "next/head";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth";
import { useState } from "react";
import AdminMenu from "../components/admin-menu/adminMenu";
import { useFetch } from "../hooks/fetchData";
import { API_URL } from "../utils/constants";
import { ExerciseCategory } from "../interfaces/interfaces";

export default function Admin() {
    const [adminMenuOpen, setAdminMenuOpen] = useState(false);
    const router = useRouter();
    const auth = useAuth();
    const { status, error, data } = useFetch<ExerciseCategory[]>(
        `${API_URL}/api/v1/exercise/category`,
        "GET",
        [auth]
    );

    console.log(auth);
    console.log(data);

    if (auth.error) {
        router.push("/login");
    }

    if (auth.user) {
        if (auth?.user?.role !== "ADMIN") {
            router.push("/dashboard");
        }
        return (
            <div>
                <Head>
                    <title>Admin</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout>
                    <div className="max-w-7xl mx-auto px-4 mb-40">
                        {auth.user.role === "ADMIN" ? (
                            <div>
                                <AdminMenu
                                    isOpen={adminMenuOpen}
                                    close={() => setAdminMenuOpen(false)}
                                    categories={data}
                                />
                                <h1 className="text-2xl md:text-4xl text-headline font-headline my-2">
                                    Admin Dashboard
                                </h1>
                                <div
                                    onClick={() => setAdminMenuOpen(true)}
                                    className="fixed w-14 h-14 z-50 rounded-full bottom-16  right-4 md:right-12 bg-primary flex items-center justify-center cursor-pointer"
                                >
                                    <button className="font-headline text-headline text-xl">
                                        +
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <p>This page is only for admins.</p>
                            </div>
                        )}
                    </div>
                </Layout>
            </div>
        );
    }

    return <div>loading...</div>;
}
