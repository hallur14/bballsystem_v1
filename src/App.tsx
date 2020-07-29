import React from "react";
import { Grid } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import "./App.css";
import NavBar from "./Components/navbar";
import Scoreboard from "./Components/scoreboard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item>
          <NavBar />
        </Grid>

        <Scoreboard />
      </Grid>
    </div>
  );
}

export default App;
