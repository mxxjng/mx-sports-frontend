import * as React from "react";

const Teams: React.FC = () => {
  const [teams, setTeams] = React.useState([]);

  console.log(teams);

  return (
    <div>
      {teams.length > 0 ? (
        <div>
          {teams.map((team) => {
            return (
              <div
                key={team.id}
                className="flex items-center p-4 bg-bgHighlight rounded-lg mb-3"
              >
                <img
                  src={team.teamLogo}
                  className="w-2/12 sm:w-1/12 mr-4"
                  alt="teamlogo"
                />
                <p className="text-xl text-headline font-headline">
                  {team.teamName}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>no teams found...</p>
      )}
    </div>
  );
};
export default Teams;
