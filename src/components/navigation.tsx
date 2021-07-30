import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-bgHighlight p-2 text-center">
        <p className="text-headline text-sm">
          This site is still in development. Data could be missing.
        </p>
      </div>
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link href="/">
          <img
            src="https://i.imgur.com/v30Aj8L.png"
            className="w-20 md:w-24 cursor-pointer"
          />
        </Link>

        <div className="hidden sm:flex">
          <div
            className={`${
              router.pathname === '/games' && 'border-b-2 border-primary'
            } p-2`}
          >
            <Link href="/games">Games</Link>
          </div>
          <div
            className={`${
              router.pathname === '/standings' && 'border-b-2 border-primary'
            } p-2`}
          >
            <Link href="/standings">Standings</Link>
          </div>
          <div
            className={`${
              router.pathname === '/stats' && 'border-b-2 border-primary'
            } p-2`}
          >
            <Link href="/stats">Stats</Link>
          </div>
          <div
            className={`${
              router.pathname === '/playoffs' && 'border-b-2 border-primary'
            } p-2`}
          >
            <Link href="/playoffs">Playoffs</Link>
          </div>
          <div
            className={`${
              router.pathname === '/players' && 'border-b-2 border-primary'
            } p-2`}
          >
            <Link href="/players">Players</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
