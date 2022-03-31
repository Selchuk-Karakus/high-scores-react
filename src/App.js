import React, { useState } from "react";
import "./App.css";
import Data from "./data/scores";
import HighScoresTable from "./HighScoresTable";

function App() {
  const [isOrdered, setIsOrdered] = useState(true);

  let alphabeticalCountryOrder = Data.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });

  alphabeticalCountryOrder.map((country) => {
    return country.scores.sort((personA, personB) => {
      return isOrdered
        ? personA.s > personB.s
          ? -1
          : 1
        : personA.s < personB.s
        ? -1
        : 1;
    });
  });

  const handleClick = () => {
    setIsOrdered(!isOrdered);
  };

  return (
    <div className="main-container">
      <button className="button" onClick={handleClick}>Reverse Player Score Order</button>
      <HighScoresTable scores={alphabeticalCountryOrder} />
    </div>
  );
}

export default App;
