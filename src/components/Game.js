import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cards: {
    maxWidth: "1200px",
    maxHeight: "1200px",
    margin: "0 auto",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: ({ level }) => `repeat(${level}, 1fr)`,
    border: "3px solid green",
  },
  card: {
    backgroundColor: ({ color }) => `hsl(${color}, 50%, 50%)`,
    color: "white",
    padding: "1rem",
    height: ({ level }) => `(${100 / level}%, 1fr)`,
    width: ({ level }) => `(${100 / level}%, 1fr)`,
  },
  cardDifferent: {
    backgroundColor: ({ color }) => `hsl(${color}, 20%, 50%)`,
    color: "white",
    padding: "1rem",
    height: ({ level }) => `(${100 / level}%, 1fr)`,
    width: ({ level }) => `(${100 / level}%, 1fr)`,
  },
});

const Game = ({ level, matrixSize, nDifferent, color, onCardClicked }) => {
  const classes = useStyles({ level, color });

  return (
    <div className={classes.cards}>
      {[...Array(matrixSize)].map((_, tileIndex) =>
        tileIndex !== nDifferent ? (
          <div
            className={classes.card}
            key={tileIndex}
            id={tileIndex}
            onClick={onCardClicked}
          >
            {tileIndex}
          </div>
        ) : (
          <div
            className={classes.cardDifferent}
            key={tileIndex}
            id={tileIndex}
            onClick={onCardClicked}
          >
            {nDifferent}
          </div>
        )
      )}
    </div>
  );
};

export default Game;
