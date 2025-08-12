import React from "react";
import "./Nexttab4.css";

// const images = ["/img1.jpg", "/img3.png"];

function Nexttab4() {
  return (
    <section className="Nexttab4-section">
      <div data-aos="fade-right" className="Nexttab4-text">
        <p>
          Senshost's rule engine allows you to set up rules that monitor data
          from your IoT devices. When certain conditions are met, the rule
          engine automatically triggers actions or notifications. It's like
          having a smart assistant that keeps an eye on your devices and
          responds according to your instructions, making your IoT setup more
          efficient and responsive to changes.
        </p>
        <br />
        <h1>Monitor and React</h1>
      </div>
      <div data-aos="fade-left" className="Nexttab4-image">
        <img src={"/img5.png"} alt="Dashboard Preview" />
      </div>
    </section>
  );
}

export default Nexttab4;
