import React from "react";

const WordWideTable = ({ data }) => {
  let playerList = [];

  for (let key in data) {
    for (let player of data[key].scores) {
      playerList.push(player);
    }
  }

  let highToLow = playerList.sort((playerA, playerB) => {
    return playerA.s > playerB.s ? -1 : 1;
  });

  return (
    <>
      <h1>World-Wide Player Score Table</h1>
      <ul className="table">
        {highToLow.map((player, ind) => {
          return (
            <li className="result-row" key={ind}>
              <span className="name-holder">{player.n}</span>{" "}
              <span className="score-holder">{player.s}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default WordWideTable;
