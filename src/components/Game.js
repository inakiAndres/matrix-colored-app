import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cards: {
    width: "40vw",
    height: "40vw",
    margin: "0 auto",
    display: "grid",
    gridGap: ({ gapSize }) => `${gapSize}rem`,
    gridTemplateColumns: ({ level }) => `repeat(${level}, 1fr)`,
    border: "3px solid green",
    "@media screen and (max-width: 575.98px)": {
      width: "40vh",
      height: "40vh",
      gridGap: ({ gapSize }) => `${gapSize / 2.5}rem`,
    },
  },
  card: {
    backgroundColor: ({ color, principalColorSatAndLum }) =>
      `hsl(${color}, ${principalColorSatAndLum}%, ${principalColorSatAndLum}%)`,
    color: "white",
  },
  cardDifferent: {
    backgroundColor: ({ color, saturation, lightness }) =>
      `hsl(${color}, ${saturation}%, ${lightness}%)`,
    color: "white",
  },
});

const Game = ({ level, onCardClicked }) => {
  //Color region
  const principalColorSatAndLum = 50;
  const [color, setColor] = useState();
  const [saturation, setSaturation] = useState(30);
  const [lightness, setLightness] = useState(30);
  const randomColors = () => {
    const maxVariant = 20 - level / 2;
    const diffVariant = Math.floor(Math.random() * maxVariant);
    setColor(Math.floor(Math.random() * 360));
    setSaturation(principalColorSatAndLum - (maxVariant - diffVariant));
    setLightness(principalColorSatAndLum - diffVariant);
  };
  useEffect(() => {
    randomColors();
  }, [level]);

  //Size and gameplay region
  const matrixSize = level * level;
  const nDifferent = Math.floor(Math.random() * matrixSize);
  const checkResult = (tileIndex) => () => {
    tileIndex === nDifferent ? onCardClicked("won") : onCardClicked("lost");
  };
  const gapSize = 1 - 0.02 * level;
  const classes = useStyles({
    level,
    color,
    principalColorSatAndLum,
    saturation,
    lightness,
    gapSize,
  });

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
