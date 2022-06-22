import React from "react";

//logo
import Logo from "../../assets/images/logo.png";

//styles
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span className="logo-title">Agency</span>
      </div>
      <nav className="navigation">
        <ul>
          <li className="navigation__item">
            <a href="#" className="navigation__item-link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__item-link">
              Services
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__item-link">
              Pricing
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__item-link">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="contact">
        <span className="contact-btn">CONTACT</span>
      </div>
    </header>
  );
};

export default Header;
