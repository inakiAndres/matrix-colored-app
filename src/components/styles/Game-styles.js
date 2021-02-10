import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  cards: {
    width: "40vw",
    height: "40vw",
    margin: "0 auto",
    display: "grid",
    gridGap: ({ gapSize }) => `${gapSize}rem`,
    gridTemplateColumns: ({ level }) => `repeat(${level}, 1fr)`,
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
