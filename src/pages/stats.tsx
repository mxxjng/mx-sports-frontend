import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import teamStats from '../data/stats/team-stats.json';

export default function Stats() {
  return (
    <div>
      <Head>
        <title>Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h1 className="text-2xl text-headline font-headline mb-2">Stats</h1>
          <p className="text-textColor mb-4">
            NOTE! These Stats are generated from the elf homepage gamebook so
            data could be missing. (Data for Game Panthers vs Kings and Galaxy
            vs Panthers is missing)
          </p>
          <div>
            {teamStats.teamStats ? (
              <div>
                <div className="block md:flex mb-4">
                  <div className="w-full md:w-1/2 mr-0 md:mr-2">
                    <h2 className="text-2xl text-headline font-headline mb-2">
                      Total offensive Yards:
                    </h2>
                    {teamStats.teamStats
                      .sort((a, b) => b.offensiveYards - a.offensiveYards)
                      .map((team, index) => {
                        return (
                          <Link href={`/teams/${team.team}`} key={team.team}>
                            <div className="flex items-center w-full justify-between p-2 rounded-md bg-bgHighlight mb-2 cursor-pointer">
                              <div className="flex items-center">
                                <p className="text-headline mr-3 font-headline">
                                  {index + 1}
                                </p>
                                <img className="w-10 mr-2" src={team.logo} />
                                <h2 className="text-textColor">
                                  {team.teamName}
                                </h2>
                              </div>
                              <p className="text-headline font-headline">
                                {team.offensiveYards}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                  <div className="w-full md:w-1/2 ml-0 md:ml-2">
                    <h2 className="text-2xl text-headline font-headline mb-2">
                      Total passing Yards:
                    </h2>
                    {teamStats.teamStats
                      .sort((a, b) => b.passingYards - a.passingYards)
                      .map((team, index) => {
                        return (
                          <Link href={`/teams/${team.team}`} key={team.team}>
                            <div className="flex items-center w-full justify-between p-2 rounded-md bg-bgHighlight mb-2 cursor-pointer">
                              <div className="flex items-center">
                                <p className="text-headline mr-3 font-headline">
                                  {index + 1}
                                </p>
                                <img className="w-10 mr-2" src={team.logo} />
                                <h2 className="text-textColor">
                                  {team.teamName}
                                </h2>
                              </div>
                              <p className="text-headline font-headline">
                                {team.passingYards}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                </div>
                <div className="block md:flex mb-4">
                  <div className="w-full md:w-1/2 mr-0 md:mr-2">
                    <h2 className="text-2xl text-headline font-headline mb-2">
                      Total rushing Yards:
                    </h2>
                    {teamStats.teamStats
                      .sort((a, b) => b.rushingYards - a.rushingYards)
                      .map((team, index) => {
                        return (
                          <Link href={`/teams/${team.team}`} key={team.team}>
                            <div className="flex items-center w-full justify-between p-2 rounded-md bg-bgHighlight mb-2 cursor-pointer">
                              <div className="flex items-center">
                                <p className="text-headline mr-3 font-headline">
                                  {index + 1}
                                </p>
                                <img className="w-10 mr-2" src={team.logo} />
                                <h2 className="text-textColor">
                                  {team.teamName}
                                </h2>
                              </div>
                              <p className="text-headline font-headline">
                                {team.rushingYards}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </div>
            ) : (
              <p>loading</p>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}
