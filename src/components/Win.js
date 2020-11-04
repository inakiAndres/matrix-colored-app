import React from "react";

import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  winContainer: { marginTop: "20px" },
});
const Win = () => {
  const classes = useStyles();
  return <div className={classes.winContainer}>GANADOR</div>;
};

export default Win;
