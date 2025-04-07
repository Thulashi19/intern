// About.js
import React from 'react';
import img6 from './img6.png'
function About() {
  return (
    <div className="about-container">
        
      <h2 className="about-title">About Us</h2>
      <img src={img6} alt="VSharp Banner" className="about-image" />
      <p className="about-text">
        Welcome to <strong>VSharp</strong>  your go-to destination for the latest and greatest in mobile technology.
        We offer a curated selection of smartphones to suit every need and budget.
      </p>
      <p className="about-text">
        Our mission is to deliver high-quality mobile phones with unbeatable service and fast delivery.
        Thank you for choosing <strong>VSharp</strong>!
      </p>
      <button className="about-button">Shop Now</button>

    </div>
  );
}

export default About;
