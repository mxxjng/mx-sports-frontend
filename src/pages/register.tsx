import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/layout';
import { makeRequest } from '../utils/utils';

export default function Register() {
  const handleLogin = async (e) => {
    e.preventDefault();
    let req = await makeRequest('http://localhost:5000/api/v1/exercise', 'GET');
    console.log(req);
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
          <form onSubmit={handleLogin}>
            <input
              className="w-full rounded-md bg-bgHighlight text-headline p-2 mb-2"
              placeholder="E-Mail"
              type="text"
              required
            />
            <input
              className="w-full rounded-md bg-bgHighlight text-headline p-2 mb-2"
              placeholder="Passwort"
              type="password"
              required
            />
            <button
              type="submit"
              className="p-2 border border-primary rounded-md w-full text-headline"
            >
              Jetzt registrieren
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
}
