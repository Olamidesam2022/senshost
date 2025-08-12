import React from "react";
import "./slideshow.css";

// const images = ["/img1.jpg", "/img3.png"];

function Slideshow() {
  return (
    <section
      className="slideshow-section"
      style={{
        backgroundImage: "url('/img89.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div data-aos="fade-right" className="slideshow-text">
        <h1>Senshost</h1>
        <h1>IoT Platform for Smart Solutions</h1>
        <p>
          <br />
          Effortlessly manage devices, collect data, process information, and
          visualize insights with Senshost for your IoT needs.
        </p>
      </div>

      <div data-aos="zoom-up" data-aos-delay="500" className="slideshow-image">
        <img src={"/img1.jpg"} alt="Dashboard Preview" />
      </div>
    </section>
  );
}

export default Slideshow;
