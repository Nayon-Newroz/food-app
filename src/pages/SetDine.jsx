import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import pickUpIconBlack from "../assets/images/pickUpIconBlack.svg";
import pickUpIconWhite from "../assets/images/pickUpIconWhite.svg";
import dineIconWhite from "../assets/images/dineIconWhite.svg";
import dineIconBlack from "../assets/images/dineIconBlack.svg";

import logo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/LocationIcon.svg";
import square from "../assets/images/square.svg";

import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  h2: {
    fontSize: "24px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: 0,
  },
  h3: {
    fontSize: "22px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "bold",
    margin: "0 0 5px 0",
  },
  titleStyle: {
    fontSize: "20px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: "0 0 20px 0",
    color: "#272D2F",
  },
  cardTitleStyle: {
    fontSize: "18px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: "0 0 0 0",
    color: "#272D2F",
    [theme.breakpoints.down(376)]: {
      fontSize: "16px",
    },
  },

  h4: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    margin: "0 0 5px 0",
    color: "#666E7A",
  },
  h5: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    fontWeight: 400,
    color: "#666E7A",
    [theme.breakpoints.down(376)]: {
      fontSize: "12px",
    },
  },
  cardText: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    fontWeight: 400,
    color: "#272D2F",
  },
  h6: {
    fontSize: "13px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
    fontWeight: 400,
    [theme.breakpoints.down(376)]: {
      fontSize: "12px",
    },
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#ffffff",
    margin: 0,
  },

  imageStyle: {
    display: "block",
    margin: "auto",
  },

  iconButtonStyle: {
    ["& .MuiTypography-root"]: {
      color: "#272D2F !important",
      paddingLeft: "4px !important",
      fontSize: "18px !important",
      fontFamily: "'Inter', sans-serif !important",
      fontWeight: "400 !important",
      // paddingLeft:'22px'

      // [theme.breakpoints.down(380)]: {
      //   fontSize: "15px !important",
      // },
    },
  },
  logoStyle: {
    // height: "45px",
    width: "100%",
    paddingRight: "10px",
    display: "inherit",
  },
  listItemStyle: {
    border: "1px solid #EEEEEE",
    borderRadius: "10px",
    background: "#fff",
    cursor: "pointer",
    marginBottom: "12px",
    "&:last-child": {
      marginBottom: "0px",
    },
  },

  listItemAvatarStyle: {
    minWidth: "30px  !important",
    marginRight: "5px",
  },
  selectStyle: {
    ["& .MuiOutlinedInput-input"]: {
      padding: "3.5px 14px",
    },
  },
  card: {
    background: "#F2F3F7",
    padding: "12px",
    borderRadius: "4px",
  },
  active: {
    background: "#272D2F",
    color: "#ffffff !important",
  },

  customOutline: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EEEEEE",
      borderRadius: "10px",
    },
  },
  buttonStyle: {
    background: "#272D2F",
    padding: "15px",
    textAlign: "center",
    fontSize: "18px",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    borderRadius: "10px",
  },
}));

const SetDine = () => {
  const classes = useStyles();
  const [active, setActive] = useState("Dine In");
  const [language, setLanguage] = useState("English");
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [place, setPlace] = useState("");
  const [tableNo, setTableNo] = useState();
  const [noOfGuest, setNoOfGuest] = useState();

  const handlePlace = (event) => {
    setPlace(event.target.value);
  };
  const handleTableNo = (event) => {
    setTableNo(event.target.value);
  };
  const handleNoOfGuest = (event) => {
    setNoOfGuest(event.target.value);
  };

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  return (
    <div style={{ background: "#fff" }}>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px 15px 20px",
        }}
      >
        <p className={classes.titleStyle}>What are you up to?</p>
        <Grid container alignItems="center">
          <Grid item xs={6} style={{ paddingRight: "7px" }}>
            <div
              className={`${classes.card} ${
                active === "Dine In" ? classes.active : null
              }`}
              onClick={() => setActive("Dine In")}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ marginBottom: "5px" }}
              >
                <Grid item xs={2}>
                  <img
                    src={active === "Dine In" ? dineIconWhite : dineIconBlack}
                    alt=""
                    style={{ display: "block", margin: "auto" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  className={`${classes.cardTitleStyle} ${
                    active === "Dine In" ? classes.active : null
                  }`}
                >
                  &nbsp;Dine In
                </Grid>
              </Grid>
              <h5
                className={`${classes.cardText} ${
                  active === "Dine In" ? classes.active : null
                }`}
                style={{ textAlign: "center" }}
              >
                Serve in 5-15 min
              </h5>
            </div>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "7px" }}>
            <div
              className={`${classes.card} ${
                active === "Pick Up" ? classes.active : null
              }`}
              onClick={() => setActive("Pick Up")}
            >
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                style={{ marginBottom: "5px" }}
              >
                <Grid item xs={2}>
                  <img
                    src={
                      active === "Pick Up" ? pickUpIconWhite : pickUpIconBlack
                    }
                    alt=""
                    style={{ display: "block", margin: "auto" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  className={`${classes.cardTitleStyle} ${
                    active === "Pick Up" ? classes.active : null
                  }`}
                >
                  &nbsp;Pick Up
                </Grid>
              </Grid>
              <h5
                className={`${classes.cardText} ${
                  active === "Pick Up" ? classes.active : null
                }`}
                style={{ textAlign: "center" }}
              >
                Serve in 5-15 min
              </h5>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px",
        }}
      >
        <p className={classes.titleStyle}>You are Dining at</p>
        <div
          style={{
            border: "1px solid #EEEEEE",
            padding: "12px 20px",
            borderRadius: "10px",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <img src={logo} alt="" className={classes.logoStyle} />
            </Grid>
            <Grid item xs={9}>
              <label
                className={classes.cardTitleStyle}
                style={{ fontWeight: "bold" }}
              >
                KFC-Banani
              </label>
              &nbsp;&nbsp; &nbsp;
              <label
                className={classes.p}
                style={{
                  background: "#272D2F",
                  padding: "5px 10px",
                  borderRadius: "2px",
                }}
              >
                Open Now
              </label>
              <Grid container alignItems="center" style={{ margin: "7px 0" }}>
                <Grid item xs={1}>
                  <img
                    src={locationIcon}
                    alt=""
                    style={{
                      display: "block",
                      width: "100%",
                      paddingRight: "3px",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={11}
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  className={classes.h5}
                >
                  KFC Tower, 40 Kemal Ataturk...
                </Grid>
              </Grid>
              <h6 className={classes.h6}> Opening Hours: 11:00 AM-09:00 PM </h6>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px ",
        }}
      >
        <p className={classes.titleStyle}>Where are you seated?</p>

        <FormControl
          fullWidth
          classes={{ root: classes.customOutline }}
          style={{ marginBottom: "15px" }}
        >
          <InputLabel id="place">Hall or Floor</InputLabel>
          <Select
            labelId="place-autowidth-label"
            id="place-autowidth"
            value={place}
            onChange={handlePlace}
            // autoWidth
            label="Hall or Floor"
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={"Hall"}>Hall</MenuItem>
            <MenuItem value={"Floor"}>Floor</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          classes={{ root: classes.customOutline }}
          style={{ marginBottom: "15px" }}
        >
          <InputLabel id="tableNo">Table No</InputLabel>
          <Select
            labelId="tableNo-autowidth-label"
            id="tableNo-autowidth"
            value={tableNo}
            onChange={handleTableNo}
            // autoWidth
            label="Hall or Floor"
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={1}>001</MenuItem>
            <MenuItem value={2}>002</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth classes={{ root: classes.customOutline }}>
          <InputLabel id="noOfGuest">No Of Guest</InputLabel>
          <Select
            labelId="noOfGuest-autowidth-label"
            id="noOfGuest-autowidth"
            value={noOfGuest}
            onChange={handleNoOfGuest}
            // autoWidth
            label="Hall or Floor"
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px ",
        }}
      >
        <Link to="/dine-menu" style={{ textDecoration: "none" }}>
          <div className={classes.buttonStyle}>Start Ordering</div>
        </Link>
      </Container>
    </div>
  );
};

export default SetDine;
