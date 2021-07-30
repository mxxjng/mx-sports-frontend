import React, { useState } from 'react';

const PlayerCard = ({
  firstName,
  lastName,
  position,
  number,
  playerImage,
  teamLogo,
  teamColor,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="rounded-lg overflow-hidden relative playercard transition duration-200 cursor-pointer"
      style={{ backgroundColor: hover ? teamColor : '#24252F' }}
    >
      <div className="absolute top-1 md:top-4 left-3 md:left-4">
        <p className="text-xs md:text-base text-textColor">
          {position} #{number}
        </p>
        <img src={teamLogo} className="w-6 md:w-10" />
      </div>
      <div className="absolute bottom-1 md:bottom-4 left-3 md:left-4 z-40">
        <p className="text-textColor text-sm md:text-xl -mb-2 md:-mb-1">
          {firstName}
        </p>
        <p className="text-headline font-headline text-lg md:text-2xl">
          {lastName}
        </p>
      </div>
      <div
        className={`${
          hover ? 'opacity-0' : 'opacity-1'
        } playercard-shadow transition duration-200`}
        style={{
          background:
            'linear-gradient(0deg, #24252f 0%, rgba(36, 37, 47, 0) 100%)',
        }}
      ></div>
      <div
        className={`${
          hover ? 'opacity-1' : 'opacity-0'
        } playercard-shadow transition duration-200`}
        style={{
          background: `linear-gradient(0deg, ${teamColor} 0%, rgba(36, 37, 47, 0) 100%)`,
        }}
      ></div>
      <img src={playerImage} className="playercard-img" />
      <img
        src={teamLogo}
        className={
          hover
            ? `playercard-bglogo-active w-72 transition duration-200`
            : 'playercard-bglogo w-72 transition duration-200'
        }
      />
    </div>
  );
};
export default PlayerCard;
