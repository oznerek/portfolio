import React from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export default class Projects extends React.Component {
  render() {
    return (
      <section id="project" className="projects scrollspy">
        <div className="projects__container">
          <div className="page__title">
            <Fade delay={300}>
              <h2 className="page__title-text">Projects</h2>
            </Fade>
            <img src="img/rwd.jpg" className="page__title-img"></img>
          </div>
          <div className="projects__descripion">
            <Fade delay={300}>
              <div className="page__descriptions">
              At work I pay attention to the attention to detail and quality of written code. 
              All projects are fully responsive (RWD) and based on modern technologies selected specifically for the product.
              </div>
            </Fade>
            <div className="projects__main">
            <Slide bottom duration={1500}>
              <div className="project">
                <div className="project__container-photo ">
                  <div className="project__photo formcreator">
                    <div className="project__photo-icon">
                      <div>
                        <a target="_blank" href='https://oznerek.github.io/form-creator'> <i className="fa fa-globe" /></a> 
                      </div>
                      <div>
                        <a target="_blank" href='https://github.com/oznerek/form-creator'><i className="fas fa-code"/> </a> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project__about">
                <div className="project__about-name">Form creator</div>
                  <div className="project__about-description">
                    A very simple application for quickly creating form fields.
                    <div>
                      <span className="project__about-tools">Tools:</span>
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
              </div>
            </Slide>

            <Slide bottom duration={1500}>
              <div className="project ">
                <div className="project__container-photo ">
                  <div className="project__photo polluted">
                    <div className="project__photo-icon">
                      <div>
                      <a target="_blank" href='https://oznerek.github.io/Polluted-cities/'> <i className="fa fa-globe" /> </a>
                      </div>
                      <div>
                      <a target="_blank" href='https://github.com/oznerek/Polluted-cities'> <i className="fas fa-code" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project__about">
                  <div className="project__about-name">Polluted Cities</div>
                  <div className="project__about-description">
                    Application shows the most polluted cities in the chosen
                    country. The application uses external APIs from which data
                    about the air condition is retrieved.{" "}
                    <div>
                      <span className="project__about-tools">Tools:</span>
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
              </div>
            </Slide>  

            <Slide bottom duration={1500}>
              <div className="project ">
                <div className="project__container-photo ">
                  <div className="project__photo foodhouse">
                    <div className="project__photo-icon">
                      <div>
                      <a target="_blank" href='https://oznerek.github.io/foodhouse'><i className="fa fa-globe" /></a>
                      </div>
                      <div>
                      <a target="_blank" href='https://github.com/oznerek/foodhouse'> <i className="fas fa-code" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project__about">
                  <div className="project__about-name">Food House</div>
                  <div className="project__about-description">
                    Sample restaurant page. Uses external APIs (generating a list of
                    dishes). We can place an order on the site, which is processed
                    out on the employees' side. The site has a
                    simple mySQL database for storing data.
                    <div>
                      <span className="project__about-tools">Tools:</span>
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
              </div>              
            </Slide>  
              
            <Slide bottom duration={1500}>
              
              <div className="project">
                <div className="project__container-photo ">
                  <div className="project__photo portfolio">
                    <div className="project__photo-icon">
                      <div>
                      <a target="_blank" href='https://oznerek.github.io/portfolio/'> <i className="fa fa-globe" /> </a>
                      </div>
                      <div>
                      <a target="_blank" href='https://github.com/oznerek/portfolio'> <i className="fas fa-code" /> </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project__about">
                  <div className="project__about-name">Portfolio</div>
                  <div className="project__about-description">
                      Website created to show all my projects and skills in one place
                    <div>
                      <span className="project__about-tools">Tools:</span>
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
              </div>

              <div className="project ">
                <div className="project__container-photo ">
                  <div className="project__photo luxus">
                    <div className="project__photo-icon">
                      <div>
                      <a target="_blank" href='https://oznerek.github.io/luxus'><i className="fa fa-globe" /></a>
                      </div>
                      <div>
                      <a target="_blank" href='https://github.com/oznerek/luxus'> <i className="fas fa-code" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project__about">
                  <div className="project__about-name">Luxus</div>
                  <div className="project__about-description">
                  This is the fake website of Lexus, created for learning.
                    <div>
                      <span className="project__about-tools">Tools:</span>
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
              </div>
            </Slide>  
            
            </div>         
          </div>
        </div>
      </section>
    );
  }
}
