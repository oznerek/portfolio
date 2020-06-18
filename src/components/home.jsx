import React from "react";
import Fade from "react-reveal/Fade";
import $ from "jquery";

const Home = () => {
  const wrap = $("#home");
  wrap.on("scroll", function (e) {
    if (this.scrollTop > 147) {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $("#contact").offset().top,
        },
        2000
      );
    }
  });
  return (
    <section id="home" className="home scrollspy">
      <div className="home__container">
        <Fade bottom duration={1500} delay={500}>
          <div className="home__picture"></div>
        </Fade>
        <div className="page__title">
          <Fade delay={300}>
            <h2 className="page__title-text">Hello</h2>
          </Fade>
        </div>
        <Fade delay={1000}>
          <div className="home__description">
            <div className="name">
              I'm <br className="mobile__break" /> Michał
            </div>
            <div className="position"> Front End Developer</div>

            <div className="home__buttons">
              <a href="#skills" className="button">
                Skills
              </a>
              <a href="#project" className="button">
                Projects
              </a>
            </div>
          </div>
        </Fade>
        <img alt="" src="img/home.svg" className="page__title-img"></img>
      </div>
    </section>
  );
};

export default Home;
