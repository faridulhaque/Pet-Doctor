import React from "react";
import './About.css';

const About = () => {
  return (
    <section className=" container about" style={{ marginTop: 120,
        height: 500}}>
      <h2 className="text-primary text-center">About Me</h2>
      <div className='div-wrapper'>
        <div className='div-left'>
            <div className='frame'>

            </div>
            <h2>Farid Haque</h2>
        </div>
        <div className='div-right'>
          <p className="mt-5 text-justify">
            Hi! I am Farid Haque, a beginner in the web development world. I
            have been trying to be a good developer after I had enrolled at this
            course. I love problem solving although I am not very good at it.
            But I keep trying to improve my skill. I also love styling the sites
            with Vanilla CSS instead of using frameworks unlike other
            developers. I have completed my last 9 assignments with impressive
            marks. I want to be a MERN developer and want to work in
            international level. That's my dream and I believe hardworking is
            the only key to achieve that goal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
