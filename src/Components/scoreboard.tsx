import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

function Scoreboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography align="left" variant="h2">
          Home
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography align="center" variant="h2">
          123 : 99
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography align="right" variant="h2">
          Away
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Scoreboard;
