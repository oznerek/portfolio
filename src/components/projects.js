import React from "react";
import Slide from 'react-reveal/Slide'

export default class Projects extends React.Component {
  render() {
    return (
      <section id="project" className="projects scrollspy">
        <div className="page__title">
          <p className="page__title-number">03</p>
          <h2 className="page__title-text">Projects</h2>
        </div>
        <div className="timeLine">
        <Slide left> 
        <div className="project project__left">
            <div className="year">
              <div>2018</div>
            </div>
            <div className="project__about">
              <div className="project__about-name">Form Creator</div>
              <div className="project__about-description">
                A very simple application for quickly creating form fields.
                <div>
                  <span className="project__about-tech">Java Script</span>
                  <span className="project__about-tech">HTML5</span>
                  <span className="project__about-tech">CSS3</span>
                  <span className="project__about-tech">Bootstrap 4</span>
                  <span className="project__about-tech">ReactJS</span>
                  <span className="project__about-tech">React-Router</span>
                  <span className="project__about-tech">Redux-Form</span>
                  <span className="project__about-tech">jQuery</span>
                </div>
              </div>
            </div>
            <div className="project__photo formcreator">
              <div className="project__photo-name">Form Creator</div>
              <div className="project__photo-icon">
                <div>
                   <a href='https://oznerek.github.io/form-creator'> <i className="far fa-eye" /></a> 
                </div>
                <div>
                   <a href='https://github.com/oznerek/form-creator'><i className="fas fa-code"/> </a> 
                </div>
              </div>
            </div>
          </div>
        </Slide>

          <Slide right>
          <div className="project project__right">
            <div className="year">
              <div>2019</div>
            </div>
            <div className="project__about">
              <div className="project__about-name">Polluted City</div>
              <div className="project__about-description">
                Application shows the most polluted cities in the chosen
                country. The application uses external APIs from which data
                about the air condition is retrieved.{" "}
                <div>
                  <span className="project__about-tech">Java Script</span>
                  <span className="project__about-tech">HTML5</span>
                  <span className="project__about-tech">CSS3</span>
                  <span className="project__about-tech">Bootstrap 4</span>
                  <span className="project__about-tech">ReactJS</span>
                  <span className="project__about-tech">React-Redux</span>
                  <span className="project__about-tech">RWD</span>
                  <span className="project__about-tech">REST API</span>
                  <span className="project__about-tech">jQuery</span>
                </div>
              </div>
            </div>
            <div className="project__photo polluted">
              <div className="project__photo-name">Polluted City</div>
              <div className="project__photo-icon">
                <div>
                <a href='https://oznerek.github.io/Polluted-cities/'> <i className="far fa-eye" /> </a>
                </div>
                <div>
                <a href='https://github.com/oznerek/Polluted-cities'> <i className="fas fa-code" /> </a>
                </div>
              </div>
            </div>
          </div>
          </Slide>

          <Slide left>
          <div className="project project__left">
            <div className="year">
              <div>2019</div>
            </div>
            <div className="project__about">
              <div className="project__about-name">Food House</div>
              <div className="project__about-description">
                Sample restaurant page. Uses external APIs (generating a list of
                dishes). We can place an order on the site, which is processed
                out on the employees' side. ("http: // localhost:
                3000/epmloyee", this part is finished in 50%). The site has a
                simple mySQL database for storing data.
                <div>
                  <span className="project__about-tech">Java Script</span>
                  <span className="project__about-tech">HTML5</span>
                  <span className="project__about-tech">CSS3</span>
                  <span className="project__about-tech">ReactJS</span>
                  <span className="project__about-tech">React-Redux</span>
                  <span className="project__about-tech">RWD</span>
                  <span className="project__about-tech">REST API</span>{" "}
                  <span className="project__about-tech">CSS3</span>
                  <span className="project__about-tech">jQuery</span>
                  <span className="project__about-tech">Sass</span>
                  <span className="project__about-tech">Node</span>
                  <span className="project__about-tech">mySQL</span>
                  <span className="project__about-tech">Express</span>
                </div>
              </div>
            </div>
            <div className="project__photo foodhouse">
              <div className="project__photo-name">
                <span>Food House</span>
              </div>
              <div className="project__photo-icon">
                <div>
                <a href='https://oznerek.github.io/foodhouse'><i className="far fa-eye" /></a>
                </div>
                <div>
                <a href='https://github.com/oznerek/foodhouse'> <i className="fas fa-code" /></a>
                </div>
              </div>
            </div>
          </div>
            </Slide>

          <Slide right>
          <div className="project project__right">
            <div className="year">
              <div>2019</div>
            </div>
            <div className="project__about">
              <div className="project__about-name">Portfolio</div>
              <div className="project__about-description">
                  Website created to show all my projects and skills in one place
                <div>
                  <span className="project__about-tech">Java Script</span>
                  <span className="project__about-tech">HTML5</span>
                  <span className="project__about-tech">CSS3</span>
                  <span className="project__about-tech">ReactJS</span>
                  <span className="project__about-tech">RWD</span>
                  <span className="project__about-tech">jQuery</span>
                  <span className="project__about-tech">Sass</span>
                </div>
              </div>
            </div>
            <div className="project__photo portfolio">
              <div className="project__photo-name">Polluted City</div>
              <div className="project__photo-icon">
                <div>
                <a href='https://oznerek.github.io/portfolio/'> <i className="far fa-eye" /> </a>
                </div>
                <div>
                <a href='https://github.com/oznerek/portfolio'> <i className="fas fa-code" /> </a>
                </div>
              </div>
            </div>
          </div>
            </Slide>
            <Slide left>
          <div className="project project__left">
            <div className="year">
              <div>2019</div>
            </div>
            <div className="project__about">
              <div className="project__about-name">Luxus</div>
              <div className="project__about-description">
              This is the fake website of Lexus, created for learning.
                <div>
                  <span className="project__about-tech">Java Script</span>
                  <span className="project__about-tech">HTML5</span>
                  <span className="project__about-tech">CSS3</span>
                  <span className="project__about-tech">ReactJS</span>
                  <span className="project__about-tech">React-Router</span>
                  <span className="project__about-tech">RWD</span>
                  <span className="project__about-tech">CSS3</span>
                  <span className="project__about-tech">jQuery</span>
                  <span className="project__about-tech">Sass</span>
                </div>
              </div>
            </div>
            <div className="project__photo luxus">
              <div className="project__photo-name">
                <span>Luxus</span>
              </div>
              <div className="project__photo-icon">
                <div>
                <a href='https://oznerek.github.io/luxus'><i className="far fa-eye" /></a>
                </div>
                <div>
                <a href='https://github.com/oznerek/luxus'> <i className="fas fa-code" /></a>
                </div>
              </div>
            </div>
          </div>
            </Slide>
        </div>
      </section>
    );
  }
}
