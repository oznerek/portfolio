import React from "react";
import $ from "jquery";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false
    };
  }
  showMobileMenu = (e) =>{
    this.setState({showMobileMenu : !this.state.showMobileMenu});
    // e.preventDefault();
  }
  render() {
    let boxClass=['toggle__nav'];
    let mobileMenu = ['navigation navigation__mobile'];
    let windowWidth = $(window).width();
    if(this.state.showMobileMenu) {
      boxClass.push('active');
      mobileMenu.push('active');
    }

    function checkIfMobile() {      
      if(windowWidth > 768 ) {
        $('.navigation__mobile, .toggle__nav').removeClass('active');
      } 
    }
    checkIfMobile();

    $(window).resize(function() {
      windowWidth= $(window).width();
      checkIfMobile();
    })


    // Function changing navigation colors when is in section with bring light background.
    // And added 'active' class to left nav
    $(window).bind("scroll", function() {
      var currentTop = $(window).scrollTop();
      var elems = $(".scrollspy");
      elems.each(function() {
        var elemTop = $(this).offset().top;
        var elemBottom = elemTop + $(this).height();
        var userWindowHeight = document.documentElement.clientHeight;
        // adding active class to navigation
        if ( currentTop >= elemTop - (userWindowHeight / 2 ) && currentTop <= elemBottom ) {
          var id3 = $(this).attr("id");
          var navElem = $('a[href="#' + id3 + '"]');
          navElem.parent().addClass("active").siblings().removeClass("active");
        } 
      });
    });



    return (
      <section className="navi">
        <nav className="nav">
          <div className="nav__container">
            <div className="left">
              <img src="img/logo.png" className="nav__logo"></img>
              <p className="nav__name">Michal Oznerek</p>
            </div>
            <div className="right">
              <ul className="navigation">
                <li className="navigation-item active">
                  <a href="#home">
                    <span className="navigation-text ">Home</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="#about">
                    <span className="navigation-text">About</span>
                  </a>{" "}
                </li>
                <li className="navigation-item">
                  <a href="#skills">
                    <span className="navigation-text">Skills</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="#project">
                    <span className="navigation-text">Project</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="#contact">
                    <span className="navigation-text">Contact</span>
                  </a>
                </li>
              </ul>

              <div className="nav__link">
                <a href="http://github.com/oznerek" target="blank">
                  <img src="img/github.svg" className="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/micha%C5%82-oznerek/" target="blank">
                  <img src="img/linkedin.svg" className="linkedin"></img>
                </a>
                <div className={boxClass.join(' ')} onClick={this.showMobileMenu}> 
                  <div className="toggle__nav--box">
                    <span className="toggle__line"></span>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <ul className={mobileMenu.join(' ')}>
                <li className="navigation-item active">
                  <a href="#home" onClick={this.showMobileMenu}>
                    <span className="navigation-text ">Home</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="#about" onClick={this.showMobileMenu}>
                    <span className="navigation-text">About</span>
                  </a>{" "}
                </li>
                <li className="navigation-item">
                  <a href="#skills" onClick={this.showMobileMenu}>
                    <span className="navigation-text">Skills</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="#project" onClick={this.showMobileMenu}>
                    <span className="navigation-text">Project</span>
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="#contact" onClick={this.showMobileMenu}>
                    <span className="navigation-text">Contact</span>
                  </a>
                </li>
              </ul>

        </nav>
      </section>
    );
  }
}
