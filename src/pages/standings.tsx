import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import tableData from '../data/standings/standings.json';

export default function Standings() {
  return (
    <div>
      <Head>
        <title>Standings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <h1 className="text-2xl text-headline font-headline mb-2">
            Standings
          </h1>
          <div>
            {tableData.standings && (
              <div>
                {Object.keys(tableData.standings).map((keyName) => {
                  return (
                    <div>
                      <h3 className="text-headline font-headline text-lg sm:text-2xl mb-2">
                        {keyName}
                      </h3>
                      <div>
                        <table className="w-full text-headline border-lg mb-4 rounded-lg">
                          <thead>
                            <tr>
                              <th className="text-textColor">#</th>
                              <th className="text-textColor">Team</th>
                              <th className="hidden md:table-cell text-textColor">
                                Games Played
                              </th>
                              <th className="text-textColor">W</th>
                              <th className="text-textColor">T</th>
                              <th className="text-textColor">L</th>
                              <th className="hidden md:table-cell text-textColor">
                                Scores
                              </th>
                              <th className="hidden md:table-cell text-textColor">
                                Difference
                              </th>
                              <th className="text-textColor">PCT</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData.standings[keyName].map(
                              (table, index) => {
                                return (
                                  <tr key={table.team}>
                                    <td>{index + 1}.</td>
                                    <td>
                                      <Link href={`/teams/${table.team}`}>
                                        <div className="flex justify-content items-center cursor-pointer">
                                          <img
                                            className="w-8 sm:w-10 mr-4"
                                            src={table.logo}
                                          />
                                          <p className="text-sm sm:text-base">
                                            {table.teamName}
                                          </p>
                                        </div>
                                      </Link>
                                    </td>
                                    <td className="hidden md:table-cell">
                                      {table.gamesPlayed}
                                    </td>
                                    <td>{table.wins}</td>
                                    <td>{table.draws}</td>
                                    <td>{table.losses}</td>
                                    <td className="hidden md:table-cell">
                                      {table.points}
                                    </td>
                                    <td className="hidden md:table-cell">
                                      {table.diff}
                                    </td>
                                    <td className="font-headline">
                                      {table.pct}
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}
