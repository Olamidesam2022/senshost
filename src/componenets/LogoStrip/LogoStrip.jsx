import React from "react";
import "./LogoStrip.css";
import logo1 from "./logo.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";

const LogoStrip = () => {
  return (
    <div className="logo-strip-wrapper">
      <h3 className="logo-strip-heading">
        We are trusted by <span>teams</span> and <span>industries</span>
      </h3>
      <div className="logo-strip">
        <img src={logo1} alt="Digital Dynamics" />
        <img src={logo2} alt="Ameen" />
        <img src={logo3} alt="SMS" />
        <img src={logo4} alt="Malaysia University" />
        <img src={logo5} alt="Northport" />
      </div>
    </div>
  );
};

export default LogoStrip;
