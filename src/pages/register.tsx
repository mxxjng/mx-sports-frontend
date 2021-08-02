import Head from "next/head";

import Layout from "../components/layout";
import { makeRequest } from "../utils/utils";
import RegisterForm from "../components/registerForm";
import { API_URL } from "../utils/constants";

export default function Register() {
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
                    gender,
                    height: parseInt(formData.height),
                    weight: parseInt(formData.weight),
                }
            );
            console.log(res);
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
                <div className="max-w-xl mx-auto p-2">
                    <h1 className="text-2xl md:text-4xl text-headline font-headline my-2">
                        Register
                    </h1>
                    <RegisterForm registerUser={registerUser} />
                </div>
            </Layout>
        </div>
    );
}
