import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SetDine from "../SetDine";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles"; 
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    margin: "auto",
    width: "30%",
    background: "#E2E2E2",
    borderRadius: "3px",
    height: "6px",
  },
  iconButtonStyle: {
    position: "absolute !important",
    right: 20,
    top: 7,
  },
  buttonDivStyle: {
    position: "relative",
    padding: "25px 0 15px 0",
  },
}));

export default function SwipeableTemporaryDrawer({ drawerOpen }) {
  
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [activeUseEffect, setActiveUseEffect] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        // width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        maxHeight: "85vh",
        width: "auto",
        margin: matches === true ? "auto" : "none",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
      style={{ borderRadius: "20px 20px 0 0", background: "#fff" }}
    >
      {/* <div style={{position:'relative'}}>
        <div style={{position:'sticky',top:0,background:'#fff',borderRadius: "20px 20px 0 0",}}> */}
          <div className={classes.buttonDivStyle}>
            <IconButton
              onClick={toggleDrawer(anchor, false)}
              className={classes.iconButtonStyle}
            >
              <ClearIcon style={{ color: "#E2E2E2" }} />
            </IconButton>

            <div
              className={classes.buttonStyle}
              onClick={toggleDrawer(anchor, false)}
            ></div>
          </div>
        {/* </div> */}
        <div>
          <SetDine />
        </div>
      {/* </div> */}
    </Box>
  );
  useEffect(() => {
    if (activeUseEffect) {
      document.getElementById("drawerBtn").click();
    }
    setActiveUseEffect(true);
  }, [drawerOpen]);
  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <button hidden id="drawerBtn" onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            PaperProps={{
              elevation: 0,
              style: { backgroundColor: "transparent" },
            }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
