import Head from "next/head";

import Layout from "../components/layout";
import LoginForm from "../components/loginForm";
import { makeRequest } from "../utils/utils";
import { API_URL } from "../utils/constants";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth";

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
                <div className="max-w-5xl mx-auto p-2">
                    <h1 className="text-2xl md:text-4xl text-headline font-headline my-2">
                        Login
                    </h1>
                    <LoginForm loginUser={loginUser} />
                </div>
            </Layout>
        </div>
    );
}
