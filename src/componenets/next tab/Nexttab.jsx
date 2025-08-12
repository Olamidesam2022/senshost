import React from "react";
import "./Nexttab.css";

// const images = ["/img1.jpg", "/img3.png"];

function Nexttab() {
  return (
    <section className="nexttab-section">
      <div data-aos="fade-right" className="nexttab-image">
        <img src={"/img2.png"} alt="Dashboard Preview" />
      </div>
      <div data-aos="fade-left" className="nexttab-text">
        <h1>Manage Devices and Assets</h1>
        <br />
        <p>
          With Senshost, you can easily oversee all your devices and assets from
          a single platform. Whether it's tracking equipment, monitoring
          inventory, or managing machinery, our user-friendly interface makes it
          straightforward to stay organized and in control. Say goodbye to
          manual tracking methods and hello to streamlined management with
          Senshost.
        </p>
      </div>
    </section>
  );
}

export default Nexttab;
