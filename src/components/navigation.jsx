import React, { Component } from "react";
import $ from "jquery";

export default class Navigation extends Component {
  state = {
    showMobileMenu: false,
    menuList: [
      { name: "Home", href: "#home", active: true },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Project", href: "#project" },
      { name: "Contact", href: "#contact" },
    ],
  };
  showMobileMenu = (e) => {
    this.setState({ showMobileMenu: !this.state.showMobileMenu });
  };

  render() {
    let boxClass = ["toggle__nav"];
    let mobileMenu = ["navigation navigation__mobile"];
    let windowWidth = $(window).width();
    if (this.state.showMobileMenu) {
      boxClass.push("active");
      mobileMenu.push("active");
    }

    function checkIfMobile() {
      if (windowWidth > 768) {
        $(".navigation__mobile, .toggle__nav").removeClass("active");
      }
    }
    checkIfMobile();

    $(window).resize(function () {
      windowWidth = $(window).width();
      checkIfMobile();
    });

    $(window).bind("scroll", function () {
      var currentTop = $(window).scrollTop();
      var elems = $(".scrollspy");
      elems.each(function () {
        var elemTop = $(this).offset().top;
        var elemBottom = elemTop + $(this).height();
        var userWindowHeight = document.documentElement.clientHeight;

        if (
          currentTop >= elemTop - userWindowHeight / 2 &&
          currentTop <= elemBottom
        ) {
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
              <img alt="" src="img/logo.png" className="nav__logo"></img>
              <p className="nav__name">Michal Oznerek</p>
            </div>
            <div className="right">
              <ul className="navigation">
                {this.state.menuList.map((item) => (
                  <li
                    key={item.name}
                    className={
                      item.active ? "navigation-item active" : "navigation-item"
                    }
                  >
                    <a href={item.href}>
                      <span className="navigation-text ">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="nav__link">
                <a href="http://github.com/oznerek" target="_blank">
                  <img alt="" src="img/github.svg" className="github"></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/micha%C5%82-oznerek/"
                  target="_blank"
                >
                  <img alt="" src="img/linkedin.svg" className="linkedin"></img>
                </a>
                <div
                  className={boxClass.join(" ")}
                  onClick={this.showMobileMenu}
                >
                  <div className="toggle__nav--box">
                    <span className="toggle__line"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className={mobileMenu.join(" ")}>
            {this.state.menuList.map((item) => (
              <li
                key={item.name}
                className={
                  item.active ? "navigation-item active" : "navigation-item"
                }
              >
                <a href={item.href} onClick={this.showMobileMenu}>
                  <span className="navigation-text ">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    );
  }
}
