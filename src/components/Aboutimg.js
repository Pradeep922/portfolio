import React from "react";
import "./Aboutimg.css";
import AboutImage from "../assets/aboutimg.jpg";

const Aboutimg = () => {
  return ( 
    <div className="Aboutimg">
      <div className="About">
        <img className="about-bg" src={AboutImage} alt="About Image" />
      </div>
      <div className="content">
        <h1>About Me</h1>
        <p>
          Innovative, Task driven professional with 3+ years experience in Web
          Design and Development across diverse industries. Equipped with a
          record of success in consistently identifying and developing the
          technological needs of companies through ingenious innvotion.
          Proficient in creating User Interface, writing and testing codes,
          troubleshooting Issues and Implementing new features on User Feedback.
        </p>
      </div>
    </div>
  );
};

export default Aboutimg;
