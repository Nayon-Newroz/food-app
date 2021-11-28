import React from "react";
import Navigation from "./Navigation";
import Navbar from "./partial/Navbar";
import {
  useLocation
} from "react-router-dom";

const Layout = () => {
  let location = useLocation(); 
  return (
    <React.Fragment>
      <Navigation />
      {
        location && location.pathname==='/dine-menu' &&
     
      <div
        style={{
          //   background:'#fff',
          position: "fixed",
          left: "0",
          bottom: "15px",
          height: "60px",
          width: "100%",
          zIndex: 21,
        }}
      >
        <Navbar />
      </div>
       }
    </React.Fragment>
  );
};

export default Layout;
