import React from "react";

export default class Projects extends React.Component {
  render() {
    return (
      <section id="project" className="projects">
        <div className="page__title">
          <p className="page__title-number">03</p>
          <h2 className="page__title-text">Projects</h2>
        </div>
        <div className="timeLine">
          <div className="project project__left">
            <div className='year'><div>2019</div></div>
            <div className="project__about">
              <div className="project__about-name">Polluted City</div>
              <div className="project__about-description">
              Application shows the most polluted cities in the chosen country.                <div>
                <span className="project__about-tech">Java Script</span>
                <span className="project__about-tech">HTML5</span>
                <span className="project__about-tech">ReactJS</span>
                <span className="project__about-tech">Redux</span>
                <span className="project__about-tech">RWD</span>
                <span className="project__about-tech">REST API</span>
                  </div>
              </div>
            </div>
            <div className='project__photo'>
              <div className='project__photo-name'>Polluted City</div>
              <div className='project__photo-icon'>
                <div><i class="far fa-eye"></i></div>
                <div><i class="fas fa-code"></i></div>
              </div>
            </div>
          </div>
          <div className="project project__right">
          <div className='year'><div>2019</div></div>

          <div className="project__about">
              <div className="project__about-name">Polluted City</div>
              <div className="project__about-description">
                  Application shows the most polluted cities in the chosen country                <div>
                <span className="project__about-tech">Java Script</span>
                <span className="project__about-tech">HTML5</span>
                <span className="project__about-tech">ReactJS</span>
                <span className="project__about-tech">Redux</span>
                <span className="project__about-tech">RWD</span>
                <span className="project__about-tech">REST API</span>
                </div>
              </div>
            </div>
            <div className='project__photo'>
              <div className='project__photo-name'><span>Polluted City</span></div>
              <div className='project__photo-icon'>
                <div><i class="far fa-eye"></i></div>
                <div><i class="fas fa-code"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
