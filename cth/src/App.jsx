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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blogdetails from "./Components/Blogs/Blogdetails";
import BlogList from "./Components/Blogs/BlogList";
import Contactus from "./Components/ContactUs/Contactus";

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
      <div className="">
        <div className=""></div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blogdetails />} />
            <Route path="/bloglist" element={<BlogList />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
