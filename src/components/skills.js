import React from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


export default class Skills extends React.Component {
  
  render() {
    return (
      <section id="skills" className="skills scrollspy">
        <div className="skill__container">
          <div className="page__title">
            <Fade delay={300}>
              <h2 className="page__title-text">Skills</h2>
            </Fade>
            <img src="img/skills.png" className="page__title-img"></img>
          </div>

          <div className="skills__container description">
            <Fade delay={1000}>
              <div className="page__descriptions">
                In my everyday work I use mainly basic tools, i.e. HTML5 / CSS3 / JavaScript. 
                Depending on the project, I also use popular libraries or CMS. 
                I am not afraid of new challenges and I am constantly expanding my knowledge and learning new tools. 
                Currently I am learning Vue.js
            </div>
            </Fade>
            <Slide bottom duration={1500}>
              <div className="skills__container">
                <div className="skills__block">
                  <div className="skills__block--header"> Languages </div>
                  <div className="skills__block--list">
                    <div>JavaScript</div>
                    <div>PHP</div>
                    <div>HTML5 / CSS3</div>
                  </div>
                </div>
                <div className="skills__block">
                  <div className="skills__block--header"> Framework / Libraries </div>
                  <div className="skills__block--list">
                    <div>React</div>
                    <div>jQuery</div>
                    <div>Sass</div>
                    <div>Bootstrap</div>
                    <div>Vue</div>
                  </div>
                </div>
                <div className="skills__block">
                  <div className="skills__block--header"> Other </div>
                  <div className="skills__block--list">
                    <div>MySQL</div>
                    <div>Wordpress</div>
                    <div>Git</div>
                    <div>RWD</div>
                    <div>Photoshop</div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </section>
    );
  }
}
