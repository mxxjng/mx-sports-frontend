import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import teams from '../../data/teams/team-data.json';
import games from '../../data/games/all-games-raw.json';
import standings from '../../data/standings/standings.json';
import Layout from '../../components/layout';
import teamStats from '../../data/stats/team-stats.json';

const TeamPage = () => {
  const router = useRouter();
  const { team } = router.query;
  const teamData = teams.teamdata.find((t) => t.id === team);
  const teamSchedule = games.allgames.filter(
    (g) => g.homeTeam.id === team || g.guestTeam.id === team
  );
  const teamStatsData = teamStats.teamStats.find((t) => t.team === team);

  const checkIfGameWasWon = (gameData, team) => {
    if (team === gameData.homeTeam.id) {
      if (gameData.homeScore > gameData.guestScore) {
        return (
          <p className="text-headline p-1 rounded-lg bg-success text-xs font-headline">
            WIN
          </p>
        );
      } else if (gameData.homeScore < gameData.guestScore) {
        return (
          <p className="text-headline p-1 rounded-lg bg-danger text-xs font-headline">
            LOSS
          </p>
        );
      } else if (gameData.homeScore === gameData.guestScore) {
        return (
          <p className="text-headline p-1 rounded-lg bg-bg text-xs font-headline">
            DRAW
          </p>
        );
      }
    } else {
      if (gameData.homeScore < gameData.guestScore) {
        return (
          <p className="text-headline p-1 rounded-lg bg-success text-xs font-headline">
            WIN
          </p>
        );
      } else if (gameData.homeScore > gameData.guestScore) {
        return (
          <p className="text-headline p-1 rounded-lg bg-danger text-xs font-headline">
            LOSS
          </p>
        );
      } else if (gameData.homeScore === gameData.guestScore) {
        return (
          <p className="text-headline p-1 rounded-lg bg-bg text-xs font-headline">
            DRAW
          </p>
        );
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Single Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 mb-20">
          {teamData ? (
            <div>
              <div className="flex items-center my-4 sm:my-8">
                <div>
                  <img
                    className="w-24 sm:w-48 mr-4"
                    src={teamData.logo}
                    alt="teamlogo"
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-xl sm:text-3xl text-headline font-headline">
                    {teamData.name}
                  </h1>
                  <p className="text-textColor">
                    {' '}
                    ELF, Division {teamData.division}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>loading</p>
          )}
          <div>
            <h3 className="text-headline font-headline text-xl">Schedule:</h3>
            {teamSchedule ? (
              <div className="flex overflow-x-auto">
                {teamSchedule.map((g) => {
                  return (
                    <Link href={`/games/${g.id}`}>
                      <div className="text-center bg-bgHighlight rounded-xl py-3 sm:py-4 px-6 mr-4 mt-2 cursor-pointer">
                        <p className="font-headline mb-2 text-headline">
                          {g.homeTeam.id === team ? 'VS' : 'AT'}
                        </p>
                        <img
                          className="w-12 sm:w-16 mx-auto mb-1"
                          src={
                            g.homeTeam.id === team
                              ? g.guestTeam.logo
                              : g.homeTeam.logo
                          }
                        />
                        {g.finished ? (
                          <div>
                            <div>
                              <p className="text-headline mb-2 font-headline whitespace-nowrap">
                                {g.guestScore} : {g.homeScore}
                              </p>
                            </div>
                            {checkIfGameWasWon(g, team)}
                          </div>
                        ) : (
                          <div>
                            <p className="text-sm text-textColor">{g.date}</p>
                            <p className="text-sm text-textColor">{g.time}</p>
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <p>loading</p>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TeamPage;
