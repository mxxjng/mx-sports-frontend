import React from 'react';
import Link from 'next/link';

interface Props {
  homeUid: string;
  guestUid: string;
  date: string;
  homeTeam: string;
  homeLogo: string;
  homeScore: number;
  guestScore: number;
  guestLogo: string;
  guestTeam: string;
  gameDay: number;
  isFinished: boolean;
  hasStarted: boolean;
  gameTime: string;
  homeShort: string;
  guestShort: string;
  location: string;
}

const GameHeader: React.FC<Props> = ({
  homeUid,
  guestUid,
  date,
  homeTeam,
  homeLogo,
  homeScore,
  guestScore,
  guestLogo,
  guestTeam,
  gameDay,
  isFinished,
  hasStarted,
  gameTime,
  homeShort,
  guestShort,
  location,
}) => {
  const gameIsLive: boolean = hasStarted && !isFinished;
  const formatedDate = date?.split('-');
  const fallbackLogo =
    'https://jmmedia-images.s3.eu-central-1.amazonaws.com/logos/catch-fallback.png';

  return (
    <div className="text-center">
      <p className="text-textColor text-sm sm:text-base">Gameday: {gameDay}</p>
      {date && (
        <p className="text-textColor text-sm sm:text-base">
          {formatedDate[1]}.{formatedDate[0]}.{formatedDate[2]} | {gameTime} |{' '}
          {location}
        </p>
      )}

      {gameIsLive && <p className="text-primary">• Live</p>}
      {isFinished && <p className="text-textColor">FINAL</p>}
      <div className="flex items-center mt-2 sm:mt-4">
        <div className="w-4/12 sm:w-5/12 text-center">
          <Link href={`/teams/${guestUid}`}>
            <div className="cursor-pointer">
              <img
                className="mx-auto mb-2 sm:mb-4 w-16 sm:w-48"
                src={guestLogo ? guestLogo : fallbackLogo}
              ></img>
              <h2 className="hidden sm:block text-md sm:text-xl text-headline font-headline">
                {guestTeam ? guestTeam : 'TBA'}
              </h2>
              <p className="block sm:hidden mx-2 text-base text-headline font-headline">
                {' '}
                {guestShort ? guestShort : 'TBA'}{' '}
              </p>
            </div>
          </Link>
        </div>
        {hasStarted ? (
          <div className="w-4/12 sm:w-2/12 text-center">
            <p className="text-3xl sm:text-6xl text-headline font-headline">
              {guestScore} : {homeScore}
            </p>
          </div>
        ) : (
          <div className="w-6/12 sm:w-2/12 text-center">
            <p className="text-2xl sm:text-6xl text-headline font-headline">
              at
            </p>
          </div>
        )}
        <div className="w-4/12 sm:w-5/12 text-center">
          <Link href={`/teams/${homeUid}`}>
            <div className="cursor-pointer">
              <img
                className="mx-auto mb-2 sm:mb-4 w-16 sm:w-48"
                src={homeLogo ? homeLogo : fallbackLogo}
              ></img>
              <h2 className="hidden sm:block text-md sm:text-xl text-headline font-headline">
                {homeTeam ? homeTeam : 'TBA'}
              </h2>
              <p className="block sm:hidden mx-2 text-base text-headline font-headline">
                {' '}
                {homeShort ? homeShort : 'TBA'}{' '}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default GameHeader;
