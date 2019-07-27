import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <section id="header" className="header">
        <div className="header__loader"><div className='text__center'>Loading . . .</div></div>
        <div className="slide__one" />
        <div className="slide__two"><div className='text__center text__zoom'>Welcome on my web</div></div>
        <div className="slide__three ">
          <div className="background__spiner">
            <div className="spiner">
              <div className="spin__icon-1" />
              <div className="spin__icon-2" />
              <div className="spin__icon-3" />
              <div className="spin__icon-4" />
              <div className="spin__icon-5" />
            </div>
          </div>
          <div className="background__decoration">
            <div className="decoration">
              <div className="decoration1">
                <div className="decoration__text-1">Portfolio</div>
              </div>
              <div className="decoration2">
                <div className="decoration__text-2">
                  <div>Michal</div>
                  <div>Oznerek</div>
                </div>
              </div>
              <div className="decoration3">
                <div className="decoration__text-3">Front End Developer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
