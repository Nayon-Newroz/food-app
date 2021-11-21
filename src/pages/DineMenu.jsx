import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import batch from "../assets/images/batch.svg";
import FilterIcon from "../assets/images/FilterIcon.svg";
import burger from "../assets/images/burger.svg";
import burgerBanner from "../assets/images/burgerBanner.svg";
import cardFoodImage from "../assets/images/cardFoodImage.svg";
import chicken from "../assets/images/chicken.svg";
import explore from "../assets/images/explore.svg";
import menu from "../assets/images/menu.svg";
import offers from "../assets/images/offers.svg";
import Recommendations from "../assets/images/Recommendations.svg";
import restaurantImage from "../assets/images/restaurantImage.svg";
import Like from "../assets/images/Like.svg";
import dineIn from "../assets/images/dineIn.svg";
import logo from "../assets/images/logo.svg";
import locationIcon from "../assets/images/locationIcon.png";
import Search from "../assets/images/Search.png";
import personIcon from "../assets/images/personIcon.png";
import arrowDown from "../assets/images/arrowDown.png";
import cardBackground1 from "../assets/images/cardBackground1.png";
import cardBackground2 from "../assets/images/cardBackground2.png";
import square from "../assets/images/square.svg";
import user from "../assets/images/user.svg";
import Heart from "../assets/images/Heart.svg";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

import { makeStyles } from "@mui/styles";
import RestaurantItemCorousel from "./partial/RestaurantItemCorousel";
import RecommendationItemCarousel from "./partial/RecommendationItemCarousel";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  // root: {
  //   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  //   color: "white",
  //   height: 48,
  //   padding: "0 30px",
  // },
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
  },
  logoStyle: {
    height: "45px",
    marginRight: "10px",
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
    color: "black !important",
    border: "none !important",
    paddingLeft: "0px !important",
    fontSize: "16px !important",
    fontFamily: "'Inter', sans-serif !important",
    fontWeight: "600 !important",
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
  card: {
    backgroundImage: `url(${cardBackground1})`,
    height: "150px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    width: "220px",
    borderRadius: "7px",
  },
  card2: {
    height: "200px",
    width: "180px",
    borderRadius: "7px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  card2ImgDiv: {
    height: "100px",
    position: "relative",
  },
  card2DetailDiv: {
    height: "100px",
    padding: "5px 7px",
  },
  menuStyle: {
    height: "70px",
    background: "#fff",
    borderRadius: "16px 16px 0px 0px",
    position: "absolute",
    bottom: 0,
    boxShadow: "rgb(17 17 26 / 10%) 0px 4px 12px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  menuStyle2: {
    height: "50px",
    background: "#fff",
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
  },
  active: {
    ["& p"]: {
      color: "black",
      fontWeight: 600,
    },
    ["& h4"]: {
      color: "black",
      fontWeight: 600,
    },

    borderBottom: "2px solid black",
  },
  cardIconDiv: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  cardTextDiv: {
    position: "absolute",
    bottom: 10,
    left: 10,
    display: "flex",
    alignItems: "center",
  },
  cardImg: {
    height: "30px",
    marginRight: "10px",
  },
  buttonStyle: {
    background: "#F96C45 !important",
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
});

const DineMenu = () => {
  const classes = useStyles();
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState("Deals");
  const fnActive = (id) => {
    // setActive(id);
    var elmntToView1 = document.getElementById("menu");
    elmntToView1.scrollIntoView({
      behavior: "smooth",
      // block: "end",
      // inline: "nearest",
    });

    var elmntToView = document.getElementById(id);
    elmntToView.scrollIntoView({
      behavior: "smooth",
      // block: "end",
      // inline: "nearest",
    });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY;
      console.log("scrollCheck", scrollCheck);
      let sectionId;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log("sectionTop", sectionTop);
        const sectionHeight = section.clientHeight;
        // console.log("sectionHeight", sectionHeight);
        let scrollCheckwithoutmenuHeight = scrollCheck - 50;
        console.log(
          "scrollCheckwithoutmenuHeight",
          scrollCheckwithoutmenuHeight
        );

        if (scrollCheck >= sectionTop) {
          sectionId = section.getAttribute("id");
          setActive(sectionId);
          console.log("sectionId", sectionId);
        }
      });

      // if (scrollCheck !== scroll) {
      //   setScroll(scrollCheck)
      // }
    });
  }, []);
  return (
    <div>
      <CssBaseline />
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          borderBottom: "1px solid #EEEEEE",
        }}
      >
        <Box sx={{ margin: "20px 0px" }}>
          <Grid container alignItems="center">
            <Grid item xs={10} >
              <Grid container alignItems="center">
                <Grid item xs={2}>
                  <img src={logo} alt="" className={classes.logoStyle} />
                </Grid>
                <Grid item xs={10}>
                  <h4 className={classes.h4}>KFC-Banani</h4>
                  <Grid container alignItems="center" >
                    <Grid item>
                   
                      <img
                        src={locationIcon}
                        alt=""
                        style={{ display: "block",marginRight:'4px'}}
                      /> 
                    </Grid>
                    <Grid item style={{overflow:'hidden',whiteSpace:'nowrap'}}>
                      <p className={classes.p}>
                        Blue Ocean Tower, 40 kemal Atatu...
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <img src={square} alt="" className={classes.imageStyle} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "0px",
          // borderBottom: "2px solid #EEEEEE",
        }}
      >
        <Box sx={{ margin: "15px 0px" }}>
          <Grid container alignItems="center">
            <Grid item>
              <Button
                disableRipple={true}
                variant="outlined"
                startIcon={<img src={dineIn} alt="" />}
                endIcon={<img src={arrowDown} alt="" />}
                className={classes.iconButtonStyle}
              >
                Dine-In
              </Button>
              &nbsp;
            </Grid>
            <Grid item>
              <Button
                className={classes.iconButtonStyle2}
                disableRipple={true}
                variant="outlined"
                startIcon={<img src={personIcon} alt="" />}
                // endIcon={<img src={arrowDown} alt="" />}
              >
                2{" "}
                <span
                  style={{
                    background: "#666E7A",
                    height: "7px",
                    width: "7px",
                    borderRadius: "50%",
                    margin: "0 5px",
                  }}
                ></span>{" "}
                Table No: 5
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          height: "250px",
        }}
        className={classes.backgroundStyle}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.menuStyle}
        >
          <Grid item className={`${classes.itemStyle} ${classes.active}`}>
            <img src={explore} alt="" className={classes.centerIcon} />
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
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Box sx={{ margin: "15px 0px" }}>
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              placeholder='Search'
              // value={values.password}
              // onChange={handleChange('password')}
              className={classes.inputStyle}
              style={{
                borderRadius: "12px",
                paddingRight: "20px",
                paddingLeft: "7px",
              }}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <img src={Search} alt="" />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <img src={FilterIcon} alt="" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Box sx={{ margin: "15px 0px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <h5 className={classes.h5}>#KFC #KFCbd</h5>
            </Grid>
            <Grid item xs={6}>
              <p className={classes.p} style={{ textAlign: "right" }}>
                255 Post
              </p>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "15px auto",
          height: "150px",
        }}
      >
       
        <RestaurantItemCorousel />
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Box sx={{ margin: "15px 0px" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <h4 className={classes.h4} style={{ fontWeight: 600 }}>
                Recommendations
              </h4>
            </Grid>
            <Grid item xs={6}>
              <p className={classes.p} style={{ textAlign: "right" }}>
                98 Dishes
              </p>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          margin: "15px auto",
        
        }}
      >
        
        <RecommendationItemCarousel />
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "15px auto",
          background: "#fff",
        }}
      >
        <div
          style={{
            height: "250px",
          }}
          className={classes.backgroundStyle2}
        ></div>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "0px",
          paddingRight: "0px",
          margin: "15px auto",
          position: "sticky ",
          top: 0,
          background: "#fff",
          zIndex: 20,
        }}
        id="menu"
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.menuStyle2}
        >
          <Grid
            item
            className={`${classes.itemStyle} ${
              active === "Deals" ? classes.active : null
            }`}
            onClick={() => fnActive("Deals")}
          >
            <h4 className={`${classes.menuItem}`}>Deals</h4>
          </Grid>
          <Grid
            item
            className={`${classes.itemStyle} ${
              active === "Popular" ? classes.active : null
            }`}
          >
            <p className={classes.menuItem} onClick={() => fnActive("Popular")}>
              Popular
            </p>
          </Grid>
          <Grid
            item
            className={`${classes.itemStyle} ${
              active === "For One" ? classes.active : null
            }`}
          >
            <p className={classes.menuItem} onClick={() => fnActive("For One")}>
              For One
            </p>
          </Grid>
          <Grid
            item
            className={`${classes.itemStyle} ${
              active === "For Sharing" ? classes.active : null
            }`}
          >
            <p
              className={classes.menuItem}
              onClick={() => fnActive("For Sharing")}
            >
              For Sharing
            </p>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "15px auto",
        }}
      >
        <section id="Deals">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              Deals
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.p}`}>05 items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                style={{ height: "100px", margin: "15px 0" }}
              >
                <Grid item xs={4}>
                  <img
                    src={cardFoodImage}
                    alt=""
                    // width="100%"
                    height="100%"
                    style={{ display: "block" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4
                    className={classes.h4}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Sussi (Paper & Tfish)
                  </h4>
                  <p
                    className={classes.p}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Amet minim mollit non est sit aliua dolor do...
                    <span style={{ color: "black" }}>Read More</span>
                  </p>
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "black", fontWeight: 600 }}
                        >
                          Tk. 11.05
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 13.05
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        <AddIcon style={{ color: "#fff" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </section>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "15px auto",
        }}
      >
        <section id="Popular">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              Popular
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.p}`}>05 items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div className={classes.cardContainer} key={i}>
              <Grid
                container
                alignItems="center"
                style={{ height: "100px", margin: "15px 0" }}
              >
                <Grid item xs={4}>
                  <img
                    src={cardFoodImage}
                    alt=""
                    height="100%"
                    style={{ display: "block" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4
                    className={classes.h4}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Sussi (Paper & Tfish)
                  </h4>
                  <p
                    className={classes.p}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Amet minim mollit non est sit aliua dolor do...
                    <span style={{ color: "black" }}>Read More</span>
                  </p>
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "black", fontWeight: 600 }}
                        >
                          Tk. 11.05
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 13.05
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        <AddIcon style={{ color: "#fff" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </section>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "15px auto",
        }}
      >
        <section id="For One">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              For One
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.p}`}>05 items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                // justifyContent="space-between"
                alignItems="center"
                style={{ height: "100px", margin: "15px 0" }}
              >
                <Grid item xs={4}>
                  <img
                    src={cardFoodImage}
                    alt=""
                    // width="100%"
                    height="100%"
                    style={{ display: "block" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4
                    className={classes.h4}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Sussi (Paper & Tfish)
                  </h4>
                  <p
                    className={classes.p}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Amet minim mollit non est sit aliua dolor do...
                    <span style={{ color: "black" }}>Read More</span>
                  </p>
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "black", fontWeight: 600 }}
                        >
                          Tk. 11.05
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 13.05
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        <AddIcon style={{ color: "#fff" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </section>
      </Container>
      <Container
        maxWidth="xs"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "15px auto",
        }}
      >
        <section id="For Sharing">
          <Box sx={{ margin: "15px 0px" }}>
            <label className={`${classes.h4}`} style={{ fontWeight: 600 }}>
              For Sharing
            </label>
            &nbsp; &nbsp;
            <label className={`${classes.p}`}>05 items</label>
          </Box>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className={classes.cardContainer}>
              <Grid
                container
                alignItems="center"
                style={{ height: "100px", margin: "15px 0" }}
              >
                <Grid item xs={4}>
                  <img
                    src={cardFoodImage}
                    alt=""
                    height="100%"
                    style={{ display: "block" }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4
                    className={classes.h4}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Sussi (Paper & Tfish)
                  </h4>
                  <p
                    className={classes.p}
                    style={{ fontWeight: "17px", marginBottom: "7px" }}
                  >
                    Amet minim mollit non est sit aliua dolor do...
                    <span style={{ color: "black" }}>Read More</span>
                  </p>
                  <Grid container alignItems="center">
                    <Grid item xs={9}>
                      <Grid container alignItems="center">
                        <label
                          className={classes.h6}
                          style={{ color: "black", fontWeight: 600 }}
                        >
                          Tk. 11.05
                        </label>
                        &nbsp;
                        <label
                          className={classes.h6}
                          style={{ textDecoration: "line-through" }}
                        >
                          Tk. 13.05
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "right" }}>
                      <IconButton
                        className={classes.buttonStyle}
                        component="span"
                      >
                        <AddIcon style={{ color: "#fff" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </section>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default DineMenu;
