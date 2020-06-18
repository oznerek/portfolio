import React from "react";
import Slide from "react-reveal/Slide";

const Project = ({ data }) => {
  const { addClass, title, description, githubLink, githubCode, tools } = data;
  return (
    <Slide bottom duration={1500}>
      <div className="project">
        <div className="project__container-photo ">
          <div className={"project__photo " + addClass}>
            <div className="project__photo-icon">
              <div>
                <a target="blank" href={githubLink}>
                  <i className="fa fa-globe" />
                </a>
              </div>
              <div>
                <a target="blank" href={githubCode}>
                  <i className="fas fa-code" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project__about">
          <div className="project__about-name">{title}</div>
          <div className="project__about-description">
            {description}
            <div>
              <span className="project__about-tools">Tools:</span>
              {tools.map(tool => (
                  <span key={tool} className="project__about-tech">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Project;
