import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navigation = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link href="/">
          <Image src="/logo.png" width="66" height="34" alt="MX Sports" />
        </Link>

        <div className="hidden sm:flex">
          <div
            className={`${
              router.pathname === '/login' && 'border-b-2 border-primary'
            } p-2`}
          >
            <Link href="/login">Login</Link>
          </div>
          <div
            className={`${
              router.pathname === '/register' && 'border-b-2 border-primary'
            } p-2`}
          >
            <Link href="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
