import React from "react";

export default class Skills extends React.Component {
  render() {
    return (
      <section id="skills" className="skills">
        <div className="page__title">
          <p className="page__title-number">02</p>
          <h2 className="page__title-text">Skills</h2>
        </div>

        <div className="grid">
          <div className="skill">
            <div className="skill__image">
              <img src="img/html5.png" />
            </div>
            <div className="skill__information">
              <div className="skill__information-frame">
                <h3 className="skill__information-name">HTML5</h3>
                <p className="skill__information-experience"> 1 year</p>
              </div>
              <div className="skill__bar html" />
            </div>
          </div>
          <div className="skill">
            <div className="skill__image">
              <img src="img/css3.svg" />
            </div>
            <div className="skill__information">
              <div className="skill__information-frame">
                <h3 className="skill__information-name">CSS3</h3>
                <p className="skill__information-experience"> 1 year</p>
              </div>
              <div className="skill__bar css" />
            </div>
          </div>

          <div className="skill">
            <div className="skill__image">
              <img src="img/js.png" />
            </div>
            <div className="skill__information">
              <div className="skill__information-frame">
                <h3 className="skill__information-name">Java Script</h3>
                <p className="skill__information-experience"> 1 year</p>
              </div>
              <div className="skill__bar js" />
            </div>
          </div>

          <div className="skill">
            <div className="skill__image">
              <img src="img/bootstrap.png" />
            </div>
            <div className="skill__information">
              <div className="skill__information-frame">
                <h3 className="skill__information-name">Bootstrap 4</h3>
                <p className="skill__information-experience">9 mount</p>
              </div>
              <div className="skill__bar bootstrap" />
            </div>
          </div>

          <div className="skill">
            <div className="skill__image">
              <img src="img/react.png" />
            </div>
            <div className="skill__information">
              <div className="skill__information-frame">
                <h3 className="skill__information-name">React</h3>
                <p className="skill__information-experience"> 9 mounth</p>
              </div>
              <div className="skill__bar react" />
            </div>
          </div>

          <div className="skill">
            <div className="skill__image">
              <img src="img/sass.svg" />
            </div>
            <div className="skill__information">
              <div className="skill__information-frame">
                <h3 className="skill__information-name">Sass</h3>
                <p className="skill__information-experience"> 5 mounth</p>
              </div>
              <div className="skill__bar sass" />
            </div>
          </div>

          <div className="skill">
            <div className="skill__image">
              <img src="img/mysql.svg" />
            </div>
            <div className="skill__information">
              <div className="skill__information-frame">
                <h3 className="skill__information-name">MySql</h3>
                <p className="skill__information-experience"> 4 month</p>
              </div>
              <div className="skill__bar mysql" />
            </div>
          </div>

          <div className="skill">
            <div className="skill__image">
              <img src="img/node.png" />
            </div>
            <div className="skill__information">
              <div className="skill__information-frame">
                <h3 className="skill__information-name">Node JS</h3>
                <p className="skill__information-experience"> 3 mount</p>
              </div>
              <div className="skill__bar node" />
            </div>
          </div>
          <div className="skill">
            <div className="skill__image">
              <img src="img/git.png" />
            </div>
            <div className="skill__information">
              <div className="skill__information-frame">
                <h3 className="skill__information-name">Git</h3>
                <p className="skill__information-experience"> 6 mount</p>
              </div>
              <div className="skill__bar git" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
