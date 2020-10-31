import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cards: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: ({ level }) => `repeat(${level}, 1fr)`,
    border: "3px solid green",
  },
  card: {
    backgroundColor: "blue",
    color: "white",
    padding: "1rem",
    height: "4rem",
  },
  cardDifferent: {
    backgroundColor: "red",
    color: "white",
    padding: "1rem",
    height: "4rem",
  },
});

const Game = ({ level, matrixSize, nDifferent }) => {
  const classes = useStyles({ level });

  return (
    <div className={classes.cards}>
      {[...Array(matrixSize)].map((_, tileIndex) =>
        tileIndex !== nDifferent ? (
          <div className={classes.card} key={tileIndex}>
            {tileIndex}
          </div>
        ) : (
          <div className={classes.cardDifferent} key={tileIndex}>
            {nDifferent}
          </div>
        )
      )}
    </div>
  );
};

export default Game;
