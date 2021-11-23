import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import personIcon from "../../assets/images/personIcon.png";
import locationIcon from "../../assets/images/LocationIcon.svg";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
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
});

const DineInDetailCorousel = () => {
  const data = [
    { icon: personIcon, NoOfPersons: 2, TableNo: 5 },
    { icon: locationIcon, Resturent: "1St Floor, KFC" },
    { icon: personIcon, NoOfPersons: 2, TableNo: 5 },
    { icon: locationIcon, Resturent: "1St Floor, KFC" },
    { icon: personIcon, NoOfPersons: 2, TableNo: 5 },
    { icon: locationIcon, Resturent: "1St Floor, KFC" },
  ];
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
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div style={{ minWidth: "350px" }}>
      <Slider {...settings}>
        {data.map((item, i) => (
          <div key={i}>
            <div style={{ padding: "0 20px 0 0", margin: "auto" }}>
              {i % 2 !== 0 ? (
                <Button
                  className={classes.iconButtonStyle2}
                  disableRipple={true}
                  variant="outlined"
                  startIcon={<img src={item.icon} alt="" />}
                >
                  {item.Resturent}{" "}
                </Button>
              ) : (
                <Button
                  className={classes.iconButtonStyle2}
                  disableRipple={true}
                  variant="outlined"
                  startIcon={<img src={item.icon} alt="" />}
                >
                  {item.NoOfPersons}{" "}
                  <span
                    style={{
                      background: "#666E7A",
                      height: "7px",
                      width: "7px",
                      borderRadius: "50%",
                      margin: "0 5px",
                    }}
                  ></span>{" "}
                  Table No: {item.TableNo}
                </Button>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DineInDetailCorousel;
