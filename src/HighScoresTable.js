import React from "react";

const HighScoresTable = ({ scores }) => {
  let sorted = scores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });
  return (
    <div className="main-container">
      <h1 className="main-header">High Scores per Country</h1>
      {sorted.map(({ name, scores }, ind) => {
        return (
          <div key={ind}  className="table-wrapper">
            <h3 className="country-name">HIGH SCORES: {name}</h3>
            <ul className="table">
              {scores.map((person, ind) => {
                return (
                  <li key={ind} className="result-row">
                    <span className="name-holder">
                      {person.n.toUpperCase()}{" "}
                    </span>
                    <span className="score-holder">{person.s}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default HighScoresTable;
