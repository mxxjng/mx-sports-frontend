import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';
import PlayerCard from '../components/playercard';

export default function PlayerPage() {
  return (
    <div>
      <Head>
        <title>Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h1 className="text-2xl text-headline font-headline mb-2">
            Players to watch:
          </h1>
          <div className="flex flex-wrap">
            <div className="w-1/2 sm:w-1/3 md:w-1/4 mb-2 px-1">
              <PlayerCard
                teamColor="#0D3561"
                firstName="Darius"
                lastName="Robinson"
                playerImage="https://i.imgur.com/LNS1zvr.png"
                teamLogo="https://imgur.com/RfgCanW.png"
                position="DB"
                number="1"
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 mb-2 px-1">
              <PlayerCard
                teamColor="#00472C"
                firstName="Jason"
                lastName="Augemon"
                playerImage="https://i.imgur.com/qDo4xWu.png"
                teamLogo="https://imgur.com/QhJTTds.png"
                position="RB"
                number="2"
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 px-1 mb-2">
              <PlayerCard
                teamColor="#3C1053"
                firstName="Adams"
                lastName="Gennadiy"
                playerImage="https://i.imgur.com/mDkhXOp.png"
                teamLogo="https://imgur.com/ry0LFh7.png"
                position="RB"
                number="21"
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 px-1 mb-2">
              <PlayerCard
                teamColor="#D32026"
                firstName="Quinten"
                lastName="Pounds"
                playerImage="https://i.imgur.com/KFvT6Nc.png"
                teamLogo="https://imgur.com/je8mwHO.png"
                position="WR"
                number="1"
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 px-1 mb-2">
              <PlayerCard
                teamColor="#ED1B26"
                firstName="Lukas"
                lastName="Rehder"
                playerImage="https://i.imgur.com/iDu1CMM.png"
                teamLogo="https://imgur.com/abxBs9Y.png"
                position="WR"
                number="89"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
