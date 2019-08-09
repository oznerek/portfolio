import React from "react";
import $ from "jquery";

export default class Navigation extends React.Component {
  render() {
    // Function changing navigation colors when is in section with bring light background.
    // And added 'active' class to left nav
    $(window).bind("scroll", function() {
      var currentTop = $(window).scrollTop();
      var elems = $(".scrollspy");
      elems.each(function() {
        var elemTop = $(this).offset().top;
        var elemBottom = elemTop + $(this).height();
        var userWindowHeight = document.documentElement.clientHeight;
        // change navigation color light <=> dark,  +animations
        if (currentTop >= elemTop - 30 && currentTop <= elemBottom - 30) {
          var id = $(this).attr("id");
          id === "contact" || id === "skills"
            ? $(".nav").addClass("dark__nav")
            : $(".nav").removeClass("dark__nav");
        }
        if (
          currentTop >= elemTop - userWindowHeight / 2 &&
          currentTop <= elemBottom - userWindowHeight / 2
        ) {
          var id1 = $(this).attr("id");
          id1 === "contact" || id1 === "skills"
            ? $(".side__navigation").addClass("dark__nav")
            : $(".side__navigation").removeClass("dark__nav");

          // ADD ANIMATION when user scroll to section
          if (id === "about") {
            $(".information__card").css({
              "animation":
              "move__right 2s linear 4s forwards","-webkit-animation": "move__right 2s linear 4s forwards", "-moz-animation":"move__right 2s linear 4s forwards"}
            );
            $(".flash").css({"animation": "photo_flash 3s 2s forwards","-webkit-animation": "photo_flash 3s 2s forwards", "-moz-animation":"photo_flash 3s 2s forwards"});
            $(".about__background").css({"animation": "blur 1s 2s forwards","-webkit-animation": "blur 1s 2s forwards", "-moz-animation":"blur 1s 2s forwards"});
            $(".card").css({"animation": "make_photo 3s 2.5s forwards","-webkit-animation": "make_photo 3s 2.5s forwards", "-moz-animation":"make_photo 3s 2.5s forwards"});
            $(".buttons").css({"animation": "move__right 2s linear 4s forwards","-webkit-animation": "move__right 2s linear 4s forwards", "-moz-animation":"move__right 2s linear 4s forwards"});
          } else if (id === "skills") {
            $(".skill__image, .skill__information-frame").css(
              {"animation":"move__down 2s linear forwards","-webkit-animation": "move__down 2s linear forwards", "-moz-animation":"move__down 2s linear forwards"});
            $(".skill__bar").css(
              {"animation":
              "barGrowRight 2s linear forwards","-webkit-animation": "barGrowRight 2s linear forwards", "-moz-animation":"barGrowRight 2s linear forwards"}
            );
            $(".diamond").css({"animation": "diamond 1s linear 2s", "-webkit-animation": "diamond 1s linear 2s", "-moz-animation":"diamond 1s linear 2s"});
          }

        }
        if (
          currentTop >= elemTop - (userWindowHeight - 30) &&
          currentTop <= elemBottom - (userWindowHeight - 30)
        ) {
          var id2 = $(this).attr("id");
          (id2 === "contact" || id2 === "skills")
            ? $(".mouse").addClass("dark__nav")
            : $(".mouse").removeClass("dark__nav");
                    
          id2 === "footer"
            ? $(".mouse").css("display", "none")
            : $(".mouse").css("display", "flex");
        }
        // adding active class to left navigation
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
