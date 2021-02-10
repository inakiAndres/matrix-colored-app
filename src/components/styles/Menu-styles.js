import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    padding: 20,
    "@media screen and (max-width: 575.98px)": {
      flexDirection: "column",
      height: "150vh",
      backgroundColor: `hsl(110, 50%, 60%)`,
    },
  },
  column: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    "@media screen and (max-width: 575.98px)": {
      width: "100%",
    },
  },
  content: {
    width: "50%",
    margin: "auto",
    textAlign: "center",
    fontSize: "24px",
    "@media screen and (max-width: 575.98px)": {
      width: "100%",
      fontSize: "18px",
    },
  },
  buttons: {
    padding: 10,
    margin: "20px",
    border: "1px solid",
    backgroundColor: "white",
    textAlign: "center",
    fontFamily: "Itim",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0)",
    fontSize: "28px",
  },
});
