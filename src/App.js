import "./App.css";
import Game from "./components/Game";

function App() {
  const level = 3;
  const matrixSize = level * level;
  const nDifferent = Math.floor(Math.random() * matrixSize);
  return (
    <div className="App">
      <Game level={level} matrixSize={matrixSize} nDifferent={nDifferent} />
    </div>
  );
}

export default App;
