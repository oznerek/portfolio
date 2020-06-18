import React from "react";
import Project from './common/project';
import Fade from "react-reveal/Fade";
import { projectList } from './data/projectList';

const Projects = () => {
  return (
    <section id="project" className="projects scrollspy">
      <div className="projects__container">
        <div className="page__title">
          <Fade delay={300}>
            <h2 className="page__title-text">Projects</h2>
          </Fade>
          <img alt="" src="img/rwd.jpg" className="page__title-img"></img>
        </div>
        <div className="projects__descripion">
          <Fade delay={300}>
            <div className="page__descriptions">
              At work I pay attention to the attention to detail and quality of
              written code. All projects are fully responsive (RWD) and based on
              modern technologies selected specifically for the product.
            </div>
          </Fade>
          <div className="projects__main">
            {projectList.map(item => (
                <Project key={item.addClass} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;