import React from "react";

export default class Navigation extends React.Component {
  render() {
    return (
      <section className="navigation">
        <nav className="nav">
          <p className="nav__name">Michal Oznerek</p>
          <div className='nav__link'>
            <a href="http://github.com/oznerek" target="blank">
              <i class="fab fa-github github" />
            </a>
            <a
              href="https://www.linkedin.com/in/micha%C5%82-oznerek/"
              target="blank"
            >
              <i class="fab fa-linkedin linkedin" />
            </a>
          </div>
        </nav>

        <ul className="side__navigation">
          <li className="side__navigation-item active">
            <a href="#header">
              <span className="side__navigation-text ">Header</span>
            </a>
          </li>
          <li className="side__navigation-item">
            <a href="#about">
              <span className="side__navigation-text">About</span>
            </a>{" "}
          </li>
          <li className="side__navigation-item">
            <a href="#skills">
              <span className="side__navigation-text">Skills</span>
            </a>
          </li>
          <li className="side__navigation-item">
            <a href="#project">
              <span className="side__navigation-text">Project</span>
            </a>
          </li>
          <li className="side__navigation-item">
            <a href="#contact">
              <span className="side__navigation-text">Contact</span>
            </a>
          </li>
        </ul>

        <div className="mouse">
            <div className="scroll">
              <div className="scroll__icon" />
            </div>
            <div className="scroll__text">Scroll down</div>
          </div>
      </section>
    );
  }
}
