import React from "react";
import "./Nexttab3.css";

// const images = ["/img1.jpg", "/img3.png"];

function Nexttab3() {
  return (
    <section className="nexttab3-section">
      <div data-aos="fade-right" className="nexttab3-image">
        <img src={"/img4.png"} alt="Dashboard Preview" />
      </div>
      <div data-aos="fade-left" className="nexttab3-text">
        <h1>Generate Insightful Report</h1>
        <br />
        <p>
          Easily create detailed and informative reports with Senshost. Our
          platform helps you generate insightful reports that provide valuable
          information and analysis, helping you make informed decisions and
          track your IoT solution's performance.
        </p>
      </div>
    </section>
  );
}

export default Nexttab3;
