import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/layout';
import GameHeader from '../../components/gameheader';
import singleGameData from '../../data/games/all-games-raw.json';

const SingleGame = () => {
  const router = useRouter();
  const { game } = router.query;
  const g = singleGameData.allgames.find((g) => g.id === game);
  const s = g?.scores;
  console.log(g);
  console.log(typeof s);

  if (!g) {
    <div>loading..</div>;
  }

  return (
    <div>
      <Head>
        <title>Single Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <GameHeader
            homeUid={g?.homeTeam.id}
            guestUid={g?.guestTeam.id}
            date={g?.date}
            gameTime={g?.time}
            gameDay={g?.gameday}
            homeTeam={g?.homeTeam.name}
            homeShort={g?.homeTeam.shortName}
            homeLogo={g?.homeTeam.logo}
            homeScore={g?.homeScore}
            guestTeam={g?.guestTeam.name}
            guestShort={g?.guestTeam.shortName}
            guestLogo={g?.guestTeam.logo}
            guestScore={g?.guestScore}
            hasStarted={true}
            isFinished={true}
            location={g?.stadium}
          />
          {s && (
            <div className="my-12">
              <div>
                <h2 className="text-headline font-headline text-xl">
                  Scoring drives:
                </h2>
              </div>
              {Object.keys(s).map((quater) => {
                return (
                  <div>
                    <p className="text-headline my-2 font-headline">
                      Quarter {quater}{' '}
                    </p>

                    <div>
                      {s[quater].map((score) => {
                        return (
                          <div className="flex items-center bg-bgHighlight mb-2 rounded-lg p-2">
                            <div className="w-2/12">
                              <img
                                className="w-8 md:w-12"
                                src={score.scoringTeam.logo}
                              />
                            </div>
                            <div className="w-1/12">
                              <p className="text-textColor font-headline">
                                {score.type}
                              </p>
                            </div>
                            <div className="w-4/12">
                              <p className="ml-2 text-textColor text-sm md:text-base">
                                {score.scorer.name}
                              </p>
                            </div>
                            <div className="w-2/12">
                              <p className="text-textColor text-sm md:text-base">
                                {score.time}
                              </p>
                            </div>
                            <div className="w-3/12 text-right">
                              <p className="text-headline font-headline text-xl mr-2">
                                {score.guestScore} : {score.homeScore}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default SingleGame;

/*
          {g && (
            <div>
              {Object.keys(g?.scores).map((gameday) => {
                return (
                  <div>
                    <div>
                      <h2 className="text-headline mb-2">Gameday {gameday}</h2>
                    </div>
                    {g.scores[gameday].map((game) => {
                      return <div>{game.scorer}</div>;
                    })}
                  </div>
                );
              })}
            </div>
          )}
          */
