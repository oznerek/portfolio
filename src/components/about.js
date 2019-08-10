import React from "react";

export default class About extends React.Component {
  render() {
    return (
        <section id="about" className="about scrollspy">
          <div className="about__background" />
          <div className="flash">
            <div className="page__title">
              <p className="page__title-number">01</p>
              <h2 className="page__title-text">About me</h2>
            </div>

            <div className="background__information">
              <div className="information__card">
                <h2 className="title">Who I am</h2>
                <p>Hello, I'm Michał and I'm from Silesia.</p>
                <p>
                  I started my adventure
                  with programming many years ago when I went to computer
                  science in a technical school. After a long break, I decided
                  to start everything from the beginning. For 1 year I have been
                  learning independently from online courses, many specialist
                  websites and forums. I spend every day learning at least 4
                  hours to gain experience and knowledge. I am currently
                  focusing on Front End. In the future I would like to broaden
                  my basic knowledge about Back End. My professional goal is to
                  work as a full stack programmer.
                </p>
              </div>
            </div>

            <div className="background__card">
              <div className="card">
                <div className="card__motto">
                  <p>If You Can Dream It</p>
                  <p>You Can Do It</p>
                </div>
              </div>

              <div className="buttons">
              <a href="#skills">
                <button className="btn btn__about">Skills</button>
              </a>
              <a href="#project">
                <button className="btn btn__about">Project</button>
              </a>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
