/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../src/assets/css/swiper-bundle.min.css";
import "../src/assets/css/aos.css";
import "../src/assets/css/output.css";
import "../src/assets/css/style.css";
import { useEffect } from "react";
import Header from "./Components/Header";
import AboutUs from "./Components/Home/AboutUs";
import HomeBanner from "./Components/Home/HomeBanner";
import DiscoverTheWord from "./Components/Home/DiscoverTheWord";
import TestiMonial from "./Components/Home/TestiMonial";
function App() {
  useEffect(() => {
    AOS.init({
      disable: function () {
        let maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);
  return (
    <>
      <div className="home-two box-border relative scroll-smooth">
        <div className="flex justify-center relative z-50">
          <Header />
        </div>
        <HomeBanner />
        <AboutUs />
        <DiscoverTheWord />
        <TestiMonial />
      </div>
    </>
  );
}

export default App;
