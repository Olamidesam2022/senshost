import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./componenets/Navbar/Navbar";
import Slideshow from "./componenets/Slideshow/slideshow";
import LogoStrip from "./componenets/LogoStrip/LogoStrip";
import Nexttab from "./componenets/next tab/Nexttab";
import Nexttab2 from "./componenets/Nexttab2/Nexttab2";
import Nexttab3 from "./componenets/Nexttab3/Nexttab3";
import Nexttab4 from "./componenets/Nexttab4/Nexttab4";
import HeroSection from "./componenets/Herosection/Herosection";
import Nexttab5 from "./componenets/Nexttab5/Nexttab5";
import Herosection2 from "./componenets/Herosection2/Herosection2";
import CardGrid from "./componenets/Card/CardGrid";
import FooterDesign from "./componenets/Footer Design/FooterDesign";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div className="App-wrapper">
      <div>
        <Navbar />
        <Slideshow />
        <LogoStrip />
        <Nexttab />
        <Nexttab2 />
        <Nexttab3 />
        <Nexttab4 />
        <HeroSection />
        <Nexttab5 />
        <Herosection2 />
        <CardGrid />
        <FooterDesign />
      </div>
    </div>
  );
}

export default App;
