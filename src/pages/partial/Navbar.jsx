import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FilterIcon from "../../assets/images/FilterIcon.svg";
import burgerBanner from "../../assets/images/burgerBanner.svg";
import cardFoodImage from "../../assets/images/cardFoodImage.png";
import exploreActive from "../../assets/images/exploreActive.svg";
import menu from "../../assets/images/menu.svg";
import offers from "../../assets/images/offers.svg";
import Recommendations from "../../assets/images/Recommendations.svg";
import restaurantImage from "../../assets/images/restaurantImage.png";
import dineIn from "../../assets/images/dineIn.svg";
import logo from "../../assets/images/logo.svg";
import locationIcon from "../../assets/images/LocationIcon.svg";
import Search from "../../assets/images/Search.png";
import personIcon from "../../assets/images/personIcon.png";
import arrowDown from "../../assets/images/arrowDown.png";
import square from "../../assets/images/square.svg";
import menuIcon from "../../assets/images/menuIcon.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import { makeStyles } from "@mui/styles"; 
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl"; 

const useStyles = makeStyles((theme) => ({
  h4: {
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: 0,
  },
  h5: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    fontWeight: 500,
  },
  h6: {
    fontSize: "13px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
    fontWeight: 400,
  },
  p: {
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    color: "#666E7A",
    margin: 0,
  },
  menuItem: {
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    margin: "13px 0",
    color: "#666E7A",
    // cursor:'pointer',
  },
  logoStyle: {
    // height: "45px",
    width: "100%",
    paddingRight: "10px",
    display: "inherit",
  },
  imageStyle: {
    padding: "5px",
    border: "1px solid #F2F2F2",
    borderRadius: "5px",
    display: "block",
    marginLeft: "auto",
  },

  iconButtonStyle: {
    color: "#272D2F !important",
    border: "none !important",
    paddingLeft: "4px !important",
    fontSize: "16px !important",
    fontFamily: "'Inter', sans-serif !important",
    fontWeight: "600 !important",

    [theme.breakpoints.down(376)]: {
      fontSize: "13px !important",
    },
  },
  iconButtonStyle2: {
    color: "#666E7A !important",
    border: "1px solid #E5E5E5 !important",
    borderRadius: "25px !important",
    fontSize: "13px !important",
    fontFamily: "'Inter', sans-serif !important",
    fontWeight: "400 !important",
    ["& .MuiButton-startIcon"]: {
      marginRight: "2px !important",
    },
  },
  backgroundStyle: {
    backgroundImage: `url(${restaurantImage})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  backgroundStyle2: {
    backgroundImage: `url(${burgerBanner})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  menuStyle: {
    height: "70px",
    background: "#fff",
    borderRadius: "16px 16px 0px 0px",
    // position: "absolute",
    // bottom: 0,
    boxShadow: "rgb(17 17 26 / 10%) 0px 4px 12px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  menuStyle2: {
    height: "50px",
    // background: "#fff",
    // borderRadius: "16px 16px 0px 0px",

    bottom: 0,
    boxShadow: "rgb(17 17 26 / 2%) 0px 15px 20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  centerIcon: {
    display: "block",
    margin: "12px auto 7px auto",
  },
  itemStyle: {
    height: "100%",
    // padding: "0 10px",
    borderTop: "2px solid rgba(0,0,0,0)",
    borderBottom: "2px solid rgba(0,0,0,0)",
    cursor: "pointer",
  },
  active: {
    ["& p"]: {
      color: "#272D2F",
      fontWeight: 600,
    },
    ["& h4"]: {
      color: "#272D2F",
      fontWeight: 600,
    },

    borderBottom: "2px solid #272D2F",
  },

  buttonStyle: {
    background: "#272D2F !important",
    padding: "0px !important",
    borderRadius: "5px !important",
  },
  cardContainer: {
    borderBottom: "2px solid #F2EFEF",
    "&:last-child": {
      borderBottom: "2px solid rgba(0,0,0,0)",
    },
  },
  inputStyle: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 1px 4px",
  },
  container2SidePadding: {
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
  container2SidePaddingAndMargin: {
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
    margin: "15px auto !important",
  },
  containerLeftSidePadding: {
    paddingLeft: "20px !important",
    paddingRight: "0px !important",
  },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
        //   height: "250px",
        }}
        // className={classes.backgroundStyle}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.menuStyle}
        >
          <Grid item className={`${classes.itemStyle} ${classes.active}`}>
            <img src={exploreActive} alt="" className={classes.centerIcon} />
            <p className={`${classes.p}`}>Explore</p>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img src={Recommendations} alt="" className={classes.centerIcon} />
            <p className={classes.p}>Recommendations</p>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img src={offers} alt="" className={classes.centerIcon} />
            <p className={classes.p}>Offers</p>
          </Grid>
          <Grid item className={classes.itemStyle}>
            <img src={menu} alt="" className={classes.centerIcon} />
            <p className={classes.p}>Menu</p>
          </Grid>
        </Grid>
      </Container>
     
     
        </div>
    )
}

export default Navbar
