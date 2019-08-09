import React from "react";

const Footer = () => {
  return (
    <section className="footer scrollspy" id="footer">
      <div className="footer__author">
      <p>
        Copyright by Michał Oznerek <sup>&copy;</sup> - 2019
      </p>
      <a href='https://oznerek.github.io/portfolio/' className="footer__link">
        {" "}
        Contact{" "}
      </a>
      </div>
      <div className='footer__powered'>
        Powered by
        <a href="http://unsplash.com" className="footer__link">
          {" "}
          Unsplash.com
        </a>
      </div>
    </section>
  );
};

export default Footer;
