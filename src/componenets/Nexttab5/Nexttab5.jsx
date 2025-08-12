import React from "react";
import "./Nexttab5.css";

// const images = ["/img1.jpg", "/img3.png"];

function Nexttab5() {
  return (
    <section
      className="Nexttab5-section"
      style={{
        backgroundColor: "white",
      }}
    >
      {/* <div className="header">SENSHOST IOT SOLUTIONS</div>
      <div className="headersub">
        Experience Seamless Efficiency and Enhanced Control with Senshost's
        Smart Solutions, Tailored to Simplify and Streamline Your Operations.
      </div> */}
      <div data-aos="fade-right" className="Nexttab5-text">
        <h2>Water Monitoring Solution</h2>
        <br />
        <p>
          Senshost's water monitoring solution is a comprehensive platform
          designed to streamline water management processes. With real-time
          monitoring capabilities, users can track water usage, quality, and
          distribution across various applications. By leveraging advanced
          sensors and analytics, Senshost enables proactive decision-making,
          helps prevent water waste, and ensures compliance with regulatory
          standards. Experience efficient water management with Senshost's
          intuitive and reliable solution.
        </p>
      </div>
      <div data-aos="fade-left" className="Nexttab5-image">
        <img src={"/img6.png"} alt="Dashboard Preview" />
      </div>
    </section>
  );
}

export default Nexttab5;
