import * as React from 'react';
import TeamPage from '../pages/teams';
import gameData from '../data/games/all-games-grouped-by-gameday.json';
import GamePreview from './gamepreview';

const Games: React.FC = () => {
  return (
    <div>
      {gameData ? (
        <div>
          {Object.keys(gameData.allgames).map((gameday) => {
            return (
              <div>
                <div>
                  <h2 className="text-headline font-headline mb-1 md:mb-2 text-sm mt-2 md:mt-4 text-center">
                    Gameday {gameday}
                  </h2>
                </div>
                {gameData.allgames[gameday].map((game) => {
                  return (
                    <GamePreview
                      key={game.id}
                      date={game.date}
                      homeTeam={game.homeTeam.name}
                      homeShort={game.homeTeam.shortName}
                      homeLogo={game.homeTeam.logo}
                      guestTeam={game.guestTeam.name}
                      guestShort={game.guestTeam.shortName}
                      guestLogo={game.guestTeam.logo}
                      hasStarted={true}
                      isFinished={true}
                      homeScore={game.homeScore}
                      guestScore={game.guestScore}
                      time={game.time}
                      uid={game.id}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <p>no games found...</p>
      )}
    </div>
  );
};
export default Games;

/*
          {games.map((game) => {
            return (
              <div key={game.id}>
                <GamePreview
                  date={game.gameDate}
                  homeTeam={game.homeTeam}
                  homeShort={game.homeTeam}
                  homeLogo={game.homeTeamLogo}
                  guestTeam={game.awayTeam}
                  guestShort={game.awayTeam}
                  guestLogo={game.awayTeamLogo}
                />
              </div>
            );
          })}
          */
