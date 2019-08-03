import React from "react";
import $ from "jquery";

export default class Navigation extends React.Component {
  render() {
// My mind explode...
// Function changing navigation colors when is in section with bring light background.
// And added 'active' class to left nav
    $(window).bind("scroll", function() {
      var currentTop = $(window).scrollTop();
      var elems = $(".scrollspy");
      elems.each(function(index) {
        var elemTop = $(this).offset().top;
        var elemBottom = elemTop + $(this).height();
        var userWindowHeight = document.documentElement.clientHeight;

        if (currentTop >= elemTop - 30 && currentTop <= elemBottom - 30) {
          var id = $(this).attr("id");
          if (id === "contact" || id === "skills") {
            $(".nav").addClass("dark__nav");
          } else {
            $(".nav").removeClass("dark__nav");
          }
        }
        if (
          currentTop >= elemTop - userWindowHeight / 2 &&
          currentTop <= elemBottom - userWindowHeight / 2
        ) {
          var id1 = $(this).attr("id");
          if (id1 === "contact" || id1 === "skills") {
            $(".side__navigation").addClass("dark__nav");
          } else {
            $(".side__navigation").removeClass("dark__nav");
          }
        }
        if (
          currentTop >= elemTop - (userWindowHeight - 30) &&
          currentTop <= elemBottom - (userWindowHeight - 30)
        ) {
          var id2 = $(this).attr("id");
          if (id2 === "contact" || id2 === "skills") {
            $(".mouse").addClass("dark__nav");
          } else {
            $(".mouse").removeClass("dark__nav");
          }
        }
        if (
          currentTop >= elemTop - (userWindowHeight / 2 - 100) &&
          currentTop <= elemBottom
        ) {
          var id3 = $(this).attr("id");
          var navElem = $('a[href="#' + id3 + '"]');
          navElem
            .parent()
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
      });
    });


    return (
      <section className="navigation">
        <nav className="nav">
          <p className="nav__name">Michal Oznerek</p>
          <div className="nav__link">
            <a href="http://github.com/oznerek" target="blank">
              <i className="fab fa-github github" />
            </a>
            <a
              href="https://www.linkedin.com/in/micha%C5%82-oznerek/"
              target="blank"
            >
              <i className="fab fa-linkedin linkedin" />
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
