import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner container">
          {/* ------------ text in the left side of the banner ----------started*/}
        <div className="text">
          <h2>Hi! I am Doctor Alina! </h2>
          <br/>
          <p>
            I work as a vet in Sylhet. I am always ready to help your pets to
            get better health. I provide home services for your pets with very
            low cost. 
            
          </p>
          <Link to="/SignIn" className='btn btn-primary'>Contact Me</Link>
        </div>
        {/* ------------ text in the left side of the banner----------- ended */}

        {/* ----------------------------------------------------------------- */}

        {/* ----------- image in the right side of the banner---------started */}
        <div className='ms-lg-auto'>
          <img src={banner} alt="dog and a doctor" />
        </div>
        {/* ----------- image in the right side of the banner---------ended */}
        
      </div>
    </div>
  );
};

export default Banner;
