import React, { useState } from "react";
import Draggable from "react-draggable";
import { Grid, Paper, Typography } from "@mui/material";
import exampleImg from "../Images/exampleImg.jpg";
import { makeStyles } from "@mui/styles";

export function CardContainer({ mode, setMode }) {
  const nodeRef = React.useRef(null);

  const classes = useStyles();

  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: 0,
      y: 0,
    },
  });

  const handleDrag = (e, ui) => {
    const { x, y } = state.deltaPosition;
    setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  const onControlledDragStop = () => {
    setState({
      deltaPosition: {
        x: 0,
        y: 0,
      },
    });
  };

  return (
    <Paper
      sx={{
        height: "500px",
        width: "400px",
      }}
      style={{
        boxShadow:
          "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px, rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        paddingTop={6}
      >
        <Grid item>
          <Draggable
            nodeRef={nodeRef}
            bounds={{ top: -50, left: -50, right: 50, bottom: 50 }}
            onDrag={handleDrag}
            grid={[50, 50]}
            position={state.deltaPosition}
            onStop={onControlledDragStop}
          >
            <div
              ref={nodeRef}
              className={
                (state.deltaPosition.y == -50 &&
                  state.deltaPosition.x < 20 &&
                  state.deltaPosition.x > -20 &&
                  classes.cardGreen) ||
                (state.deltaPosition.y == 50 &&
                  state.deltaPosition.x < 20 &&
                  state.deltaPosition.x > -20 &&
                  classes.cardBlue) ||
                (state.deltaPosition.x == -50 &&
                  state.deltaPosition.y < 20 &&
                  state.deltaPosition.y > -20 &&
                  classes.cardYellow) ||
                (state.deltaPosition.x == 50 &&
                  state.deltaPosition.y < 20 &&
                  state.deltaPosition.y > -20 &&
                  classes.cardRed) ||
                (state.deltaPosition.x !== 50 && classes.cardNeutral) ||
                (state.deltaPosition.y !== 50 && classes.cardNeutral)
              }
            >
              <Paper
                elevation={20}
                sx={{
                  height: "400px",
                  width: "300px",
                }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  paddingTop={1}
                >
                  <Grid
                    item
                    sx={{
                      pointerEvents: "none",
                    }}
                  >
                    <img
                      src={exampleImg}
                      alt="img"
                      height="280px"
                      width="210px"
                      draggable="false"
                      style={{
                        borderRadius: "5px ",
                        boxShadow: "10px 10px",
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Paper variant="outlined">
                      <Typography fontWeight="bold">Picture title</Typography>
                      <Typography fontWeight="bold">
                        Picture description
                      </Typography>
                      <div>
                        x: {state.deltaPosition.x.toFixed(0)}, y:{" "}
                        {state.deltaPosition.y.toFixed(0)}
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Draggable>
        </Grid>
      </Grid>
    </Paper>
  );
}

const useStyles = makeStyles(() => ({
  cardGreen: {
    height: "400px",
    width: "300px",
    backgroundColor: "#4caf50",
    boxShadow: "0px 20px 50px 40px #4caf50",
    transition: "box-shadow 1s ease-out",
  },

  cardRed: {
    height: "400px",
    width: "300px",
    backgroundColor: "#e91e63",
    boxShadow: "-20px 0px 50px 40px #e91e63",
    transition: "box-shadow 1s ease-out",
  },

  cardYellow: {
    height: "400px",
    width: "300px",
    backgroundColor: "#ffeb3b",
    boxShadow: "20px 0px 50px 40px #ffeb3b",
    transition: "box-shadow 1s ease-out",
  },

  cardBlue: {
    height: "400px",
    width: "300px",
    backgroundColor: "#3f51b5",
    boxShadow: "0px -20px 50px 40px #3f51b5",
    transition: "box-shadow 1s ease-out",
  },

  cardNeutral: {
    height: "400px",
    width: "300px",
    backgroundColor: "#0000",
    // boxShadow: "0px 60px 50px 50px #0000",
    transition: "box-shadow 1s ease-out",
  },
}));
