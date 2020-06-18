import React from "react";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
      <section id="about" className="about scrollspy">
        <div className="about__container">
          <div className="page__title">
            <Fade delay={300}>
              <h2 className="page__title-text">About me</h2>
            </Fade>
          </div>

          <div className="about__description">
            <img alt="" src="img/aboutme.jpg" className="page__title-img"></img>
            <Fade delay={300}>
              <p className="page__descriptions first">
                <span  className="heading">Hi, I'm Michał Oznerek and I'm Front End Developer</span>
                My programming story started many years ago, while still in technical school. After a long break after school, I decided to go back to programming and start all over again. 
                I focused on learning Front End because I like to see the results of my work right away. 

              </p>
            </Fade>
            <Fade delay={300}>
              <p className="page__descriptions">
              In my work so far, I've been involved in building websites based on popular CMS (Wordpress) as well as in smaller projects that used popular libraries. 
              All sites were based on projects delivered in PSD, XD formats. I often made various types of advertising banners, landing page, or also newsletters. 
              </p>
            </Fade>
          </div>          
        </div>
      </section>
  );
}

export default About;
