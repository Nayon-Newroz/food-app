import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import homeLogo from "../assets/images/homeLogo.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";
import dishIcon from "../assets/images/dishIcon.png";
import reserveIcon from "../assets/images/reserveIcon.png";
import wallet from "../assets/images/wallet.png";
import forwardIcon from "../assets/images/forwardIcon.png";

import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";
import OrderDrawer from "./partial/OrderDrawer";

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
    fontWeight: 500,
    color: "#666E7A",
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
}));

const Home = () => {
  const classes = useStyles();
  const [language, setLanguage] = useState("English"); 
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

 

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  return (
    <div>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 20px 15px 20px",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <h2 className={classes.h2}>Dinemate</h2>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ maxWidth: 100, float: "right" }}>
              <FormControl fullWidth size="small">
                {/* <InputLabel id="demo-simple-select-label">English</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={language}
                  // label="English"
                  onChange={handleChange}
                  className={classes.selectStyle}
                  style={{ fontSize: "12px" }}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value={"English"}>English</MenuItem>
                  <MenuItem value={"Bangla"}>Bangla</MenuItem>
                  <MenuItem value={"Spanish"}>Spanish</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "40px 20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 className={classes.h2} style={{ fontWeight: 600 }}>
            Welcome to
          </h2>
          <img src={homeLogo} alt="" style={{ margin: "35px 0 25px 0" }} />
          <h3 className={classes.h3}>KFC Banani</h3>
          <h4 className={classes.h4}>Blue Ocean Tower, Banani Dhaka</h4>
          <label className={classes.h5} style={{ color: "#008000" }}>
            Open Now
          </label>{" "}
          <span
            style={{
              background: "#272D2F",
              height: "4px",
              width: "4px",
              borderRadius: "50%",
              margin: "0 5px 3px",
              display: "inline-block",
            }}
          ></span>{" "}
          <label className={classes.h5} style={{ fontWeight: 400 }}>
            Closes 11:00 PM
          </label>
        </div>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 40px ",
        }}
      >
        <List>
          <ListItem
            className={classes.listItemStyle}
            secondaryAction={<img src={forwardIcon} alt="" />}
          >
            <ListItemAvatar className={classes.listItemAvatarStyle}>
              <img src={dishIcon} alt="" className={classes.imageStyle} />
            </ListItemAvatar>
            <ListItemText onClick={handleDrawerOpen} className={classes.iconButtonStyle}>
              Order
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.listItemStyle}
            secondaryAction={<img src={forwardIcon} alt="" />}
          >
            <ListItemAvatar className={classes.listItemAvatarStyle}>
              <img src={reserveIcon} alt="" className={classes.imageStyle} />
            </ListItemAvatar>
            <ListItemText className={classes.iconButtonStyle}>
              Reserve
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.listItemStyle}
            secondaryAction={<img src={forwardIcon} alt="" />}
          >
            <ListItemAvatar className={classes.listItemAvatarStyle}>
              <img src={wallet} alt="" className={classes.imageStyle} />
            </ListItemAvatar>
            <ListItemText className={classes.iconButtonStyle}>
              Pay Bills
            </ListItemText>
          </ListItem>
        </List>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          padding: "15px 40px ",
        }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          <Grid item>
            <img src={facebook} alt="" />
          </Grid>
          <Grid item>
            <img src={instagram} alt="" />
          </Grid>
          <Grid item>
            <img src={youtube} alt="" />
          </Grid>
        </Grid>
      </Container>
      <OrderDrawer drawerOpen={drawerOpen} />
    </div>
  );
};

export default Home;
