import React from "react";

const MatchCard = ({ match }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        {match.team1} vs {match.team2}
      </h2>

      <p className="text-sm">
        <strong>{match.team1}:</strong> {match.score1} ({match.overs1} overs,{" "}
        {match.wickets1} wickets)
      </p>
      <p className="text-sm">
        <strong>{match.team2}:</strong> {match.score2} ({match.overs2} overs,{" "}
        {match.wickets2} wickets)
      </p>

      <p
        className={`mt-2 font-medium ${
          match.status === "Live" ? "text-red-600" : "text-green-600"
        }`}
      >
        Status: {match.status}
      </p>
    </div>
  );
};

export default MatchCard;
