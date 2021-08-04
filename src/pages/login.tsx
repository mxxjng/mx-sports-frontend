import Head from "next/head";

import Layout from "../components/layout";
import LoginForm from "../components/loginForm";
import { makeRequest } from "../utils/utils";
import { API_URL } from "../utils/constants";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth";
import Link from "next/link";

export default function Login() {
    const router = useRouter();
    const auth: any = useAuth();

    if (auth.user) {
        router.push("/dashboard");
    }

    const loginUser = async (formData) => {
        try {
            const { email, password } = formData;
            let res = await makeRequest(
                `${API_URL}/api/v1/user/login`,
                "POST",
                {
                    email,
                    password,
                }
            );
            console.log(res);
            if (res.data) {
                localStorage.setItem("mx-token", res.data.token);
                router.push("/dashboard");
                window.location.pathname = "/dashboard";
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className="max-w-xl mx-auto px-4 mt-0 md:mt-32">
                    <div className="my-16 mt-8 p-0 md:p-6 md:bg-bg md:border md:border-bgHighlight md:rounded-xl">
                        <div className="mt-4 mb-6">
                            <h1 className="text-2xl md:text-4xl text-headline font-headline my-2">
                                Willkommen zurück!
                            </h1>
                            <p className="mb-4">
                                Melde dich jetzt mit deiner E-Mail und deinem
                                Passwort an
                            </p>
                        </div>
                        <LoginForm loginUser={loginUser} />
                        <p className="text-textColor text-sm text-center my-2">
                            Noch keinen Account?{" "}
                            <Link href="/register">
                                <span className="text-primary">
                                    Jetzt Registrieren
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
