import React from "react";

const LevelManager = () => {
  const level = 2;
  const matrixSize = level * level;
  const nDifferent = Math.floor(Math.random() * matrixSize);
  return <div>levelMan</div>;
};

export default LevelManager;
