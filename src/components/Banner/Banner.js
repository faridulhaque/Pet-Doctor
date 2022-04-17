import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <section className='container'>
      <img src={banner} alt="dogs"/>
      <h2>Welcome to Doctor Anila's World!</h2>
      <p>Hi! This is Doctor Alina! I work as a pet in Dhaka with four years of experience. I try to make a better world for your pets.</p>
      <Link className='button' to='./signIn'>Contact Me</Link>
      
    </section>
  );
};

export default Banner;
