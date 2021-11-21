import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import cardBackground1 from "../../assets/images/cardBackground1.png";
import user from "../../assets/images/user.svg";
import Heart from "../../assets/images/Heart.svg";
import burgerBanner from "../../assets/images/burgerBanner.svg";
import restaurantImage from "../../assets/images/restaurantImage.svg";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
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
    // marginTop: "10px",
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
    // ["& MuiButton-startIcon"]: {
    //   marginRight: "2px !important",
    // },
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
    // width: "220px",
    width: "100%",
    borderRadius: "7px",
    marginRight:'20px'
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
      color: "#F96C45",
      fontWeight: 600,
    },
    ["& h4"]: {
      color: "#F96C45",
      fontWeight: 600,
    },

    borderBottom: "2px solid #F96C45",
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
});

const RestaurantItemCorousel = () => {
  const classes = useStyles();


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }



  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <Slider {...settings} >
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <div
            key={i}
            // style={{ marginRight:'15px !important' }}
          >
            
            <div className={classes.card}>
              <div className={classes.cardIconDiv}>
                <img src={Heart} alt="" style={{ display: "block" }} />
                <p className={classes.p} style={{ color: "#fff" }}>
                  95
                </p>
              </div>
              <div className={classes.cardTextDiv}>
                <img src={user} alt="" className={classes.cardImg} />
                <div>
                  <p
                    className={classes.p}
                    style={{ color: "#fff", fontWeight: 600 }}
                  >
                    @rakib12
                  </p>
                  <p
                    className={classes.p}
                    style={{ color: "#fff", fontSize: "10px" }}
                  >
                    2 days ago{" "}
                    <span
                      style={{
                        background: "#fff",
                        height: "4px",
                        width: "4px",
                        borderRadius: "50%",
                        margin: "0 5px",
                        display: "inline-block",
                      }}
                    ></span>{" "}
                    Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RestaurantItemCorousel;
