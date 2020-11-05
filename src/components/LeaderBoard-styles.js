import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  space: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
  },
  column: {
    minWidth: "25px",
    padding: 10,
    "@media screen and (max-width: 575.98px)": {
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 2.5,
      paddingBottom: 2.5,
    },
  },
  input: {
    border: "2px solid #555",
    backgroundColor: "transparent",
    width: "50px",
    textAlign: "center",
  },
  buttons: {
    margin: "10px",
    border: "1px solid",
    backgroundColor: "transparent",
    textAlign: "center",
    fontFamily: "Itim",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0)",
  },
  firstClassified: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
    backgroundColor: "goldenrod",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)",
  },
  secondClassified: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
    backgroundColor: "silver",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)",
  },
  thirdClassified: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
    backgroundColor: "#cd7f32",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.16)",
  },
  defaultClassified: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "10px",
  },
});

export default useStyles;
