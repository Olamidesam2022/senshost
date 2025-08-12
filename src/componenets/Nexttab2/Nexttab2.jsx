import React from "react";
import "./Nexttab2.css";

// const images = ["/img1.jpg", "/img3.png"];

function Nexttab2() {
  return (
    <section className="Nexttab2-section">
      <div data-aos="fade-right" className="Nexttab2-text">
        <h1>Collect and Visualize Data</h1>
        <br />
        <p>
          With Senshost, easily gather information from your devices and
          transform it into clear, visual representations. Monitor your data
          effortlessly and gain valuable insights for better decision-making.
        </p>
      </div>
      <div data-aos="fade-left" className="Nexttab2-image">
        <img src={"/img3.png"} alt="Dashboard Preview" />
      </div>
    </section>
  );
}

export default Nexttab2;
