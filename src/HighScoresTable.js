import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoresTable = ({ scores }) => {
  return (
    <div>
      <h1 className="main-header">High Scores per Country</h1>
      {scores.map(({ name, scores }, ind) => {
        return (
          <div key={ind} className="table-wrapper">
            <h3 className="country-name">HIGH SCORES: {name}</h3>
            <ul className="table">
              <PlayerScore data={scores} />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default HighScoresTable;
