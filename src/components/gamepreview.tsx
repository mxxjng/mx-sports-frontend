import React from "react";
import Link from "next/link";

interface Props {
  uid?: string;
  date?: string;
  homeTeam?: string;
  homeLogo?: string;
  homeScore?: number;
  guestScore?: number;
  guestLogo?: string;
  guestTeam?: string;
  homeShort?: string;
  guestShort?: string;
  hasStarted?: boolean;
  isFinished?: boolean;
  formatDate?: string;
  leagueName?: string;
  homeTeamUid?: string;
  awayTeamUid?: string;
  smallDisplay?: boolean;
  time?: string;
}

const GamePreview: React.FC<Props> = ({
  uid,
  date,
  homeTeam,
  homeLogo,
  homeScore,
  guestScore,
  guestLogo,
  guestTeam,
  homeShort,
  guestShort,
  hasStarted,
  isFinished,
  formatDate,
  leagueName,
  time,
}) => {
  // checks if game is live
  // todo: gameday und datum optional integrieren
  const gameIsLive: boolean = hasStarted && !isFinished;
  const formatedDate = date.split("-");
  const fallbackLogo =
    "https://jmmedia-images.s3.eu-central-1.amazonaws.com/logos/catch-fallback.png";

  return (
    <Link href={`/games/${uid}`}>
      <div className="bg-bgHighlight py-2 box-border block mb-2 rounded-lg cursor-pointer">
        <div>
          {gameIsLive ? (
            <p className="text-center text-xs sm:text-sm text-primary font-headline">
              • Live
            </p>
          ) : (
            <p className="text-center text-xs sm:text-sm text-textColor">
              {formatedDate[1]}.{formatedDate[0]}.{formatedDate[2]} | {time}
            </p>
          )}
        </div>
        <div className="flex">
          <div className="flex justify-end gameprev-team">
            <div className="flex items-center mr-2 sm:mr-0">
              <p className="hidden sm:block mx-2 text-base text-textColor text-right">
                {" "}
                {guestTeam ? guestTeam : "TBA"}{" "}
              </p>
              <p className="block sm:hidden mx-2 text-sm text-textColor text-right">
                {guestShort}
              </p>
              <img
                className="w-8 sm:w-10"
                src={guestLogo ? guestLogo : fallbackLogo}
              ></img>
            </div>
          </div>
          {hasStarted ? (
            <div className="flex items-center justify-center gameprev-score">
              <p className="text-center font-headline text-headline text-lg sm:text-2xl">
                {guestScore} : {homeScore}
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center gameprev-score">
              <p className="text-center font-headline text-xl sm:text-2xl text-headline">
                at
              </p>
            </div>
          )}
          <div className="flex justify-start gameprev-team">
            <div className="flex items-center ml-2 sm:ml-0">
              <img
                className="w-8 sm:w-10"
                src={homeLogo ? homeLogo : fallbackLogo}
              ></img>
              <p className="hidden sm:block mx-2 text-base text-textColor">
                {" "}
                {homeTeam ? homeTeam : "TBA"}{" "}
              </p>
              <p className="block sm:hidden mx-2 text-sm text-textColor">
                {homeShort}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default GamePreview;
