import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import { makeRequest } from "../utils/utils";
import RegisterForm from "../components/registerForm";
import { API_URL } from "../utils/constants";
import { useRouter } from "next/router";

export default function Register() {
    const router = useRouter();
    const registerUser = async (formData) => {
        try {
            const { email, password, firstName, lastName, gender } = formData;
            let res = await makeRequest(
                `${API_URL}/api/v1/user/register`,
                "POST",
                {
                    email,
                    password,
                    firstName,
                    lastName,
                    height: parseInt(formData.height),
                    weight: parseInt(formData.weight),
                    gender,
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
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className="max-w-xl mx-auto px-4 mt-0 md:mt-16">
                    <div className="my-8 p-0 md:p-6 md:bg-bg md:border md:border-bgHighlight md:rounded-xl">
                        <div className="mt-4 mb-6">
                            <h1 className="text-2xl md:text-4xl text-headline font-headline my-2">
                                Herzlich Willkommen!
                            </h1>
                            <p className="mb-4">
                                Registriere dich jetzt mit deinen Daten und lege
                                direkt los!
                            </p>
                        </div>
                        <RegisterForm registerUser={registerUser} />
                        <p className="text-textColor text-sm text-center my-2">
                            Schon einen Account?{" "}
                            <Link href="/login">
                                <span className="text-primary">
                                    Jetzt Anmelden
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
