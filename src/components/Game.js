import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cards: {
    width: "50vw",
    height: "50vw",
    margin: "0 auto",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: ({ level }) => `repeat(${level}, 1fr)`,
    border: "3px solid green",
  },
  card: {
    backgroundColor: ({ color }) => `hsl(${color}, 50%, 50%)`,
    color: "white",
  },
  cardDifferent: {
    backgroundColor: ({ color }) => `hsl(${color}, 20%, 50%)`,
    color: "white",
  },
});

const Game = ({ level, onCardClicked }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    setColor(Math.floor(Math.random() * 360));
  }, [level]);

  const matrixSize = level * level;
  const nDifferent = Math.floor(Math.random() * matrixSize);
  const checkResult = (tileIndex) => () => {
    tileIndex === nDifferent ? onCardClicked("won") : onCardClicked("lost");
  };
  const classes = useStyles({ level, color });

  return (
    <div className={classes.cards}>
      {[...Array(matrixSize)].map((_, tileIndex) =>
        tileIndex !== nDifferent ? (
          <div
            className={classes.card}
            key={tileIndex}
            onClick={checkResult(tileIndex)}
          ></div>
        ) : (
          <div
            className={classes.cardDifferent}
            key={tileIndex}
            onClick={checkResult(tileIndex)}
          ></div>
        )
      )}
    </div>
  );
};

export default Game;
