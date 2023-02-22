import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { CardContainer } from "./CardContainer";

export function Home({ mode, setMode }) {
  return (
    <Paper
      variant="outlined"
      xs={12}
      sx={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={8}
      >
        <Grid item>
          <Typography variant="h2" fontWeight='bold'>Drag the art!</Typography>
        </Grid>
        <Grid item>
          <Typography>Green</Typography>
        </Grid>

        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={8}
          >
            <Grid item>
              <Typography>Yellow</Typography>
            </Grid>

            <Grid item>
              <CardContainer mode={mode} setMode={setMode} />
            </Grid>

            <Grid item>
              <Typography>Red</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography>Blue</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
