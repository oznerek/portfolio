import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="about__background" />
        <div className="flash">
          <div className="page__title">
            <p className="page__title-number">01</p>
            <h2 className="page__title-text">About me</h2>
          </div>

          <div className="background__information">
            <div className="information__card">
              <h2 className="title">Who I am</h2>
              <p>My name is Michał Oznerek.</p>
              <p>
                I'm trained as IT technician. I have been interested in
                programming and new technologies since I was a child. Since
                then, I focus on my continuous development in my programming
                skills, JavaScript and using React library in particular. My
                biggest aim is to improve myself in Back-end. My professional
                goal is to work as a Front-End Developer.
              </p>
              <p>
               Currently I living in  Silesia, but I'm open to relocation.
              </p>
            </div>
          </div>

          <div className='background__card'>
          <div className="card">
            <div className="card__motto">
              <p>If You Can Dream It</p> 
              <p>You Can Do It</p>
            </div>
          </div>

          <div className="buttons">
            <button className="btn btn__about">Skills</button>
            <button className="btn btn__about">Project</button>
          </div> 
          </div>
        </div>
      </section>
    );
  }
}
