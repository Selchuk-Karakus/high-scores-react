import React from "react";

const PlayerScore = ({ data }) => {
  return (
    <>
      {data
        .sort((personA, personB) => {
          return personA.s > personB.s ? -1 : 1;
        })
        .map((person, ind) => {
          return (
            <li key={ind} className="result-row">
              <span className="name-holder">{person.n.toUpperCase()} </span>
              <span className="score-holder">{person.s}</span>
            </li>
          );
        })}
    </>
  );
};

export default PlayerScore;
