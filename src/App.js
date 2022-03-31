import "./App.css";
import Data from "./data/scores";
import HighScoresTable from "./HighScoresTable";

function App() {
  return (
    <>
      <HighScoresTable scores={Data} />
    </>
  );
}

export default App;
