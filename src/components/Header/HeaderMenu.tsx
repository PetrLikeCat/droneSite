import React from "react";
import Cart from "..//../img/Cart.png";
import { Link } from "react-router-dom";
export const HeaderMenu = () => {
  const [btnNav, setBtnNav] = React.useState(false);
  return (
    <div className="header-menu__wrapper">
      <Link to="/">
        <img
          className="header__logo"
          src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/64522ec803e23e80fd7d970b_white%20logo.svg"
          alt="logo"
        />
      </Link>
      <nav className="menu">
        <ul className="menu-list">
          <Link to="/">
            {" "}
            <li className="menu-list__item">Demos</li>
          </Link>
          <Link to="/">
            {" "}
            <li className="menu-list__item">About us</li>
          </Link>
          <Link to="/">
            {" "}
            <li className="menu-list__item">Services</li>
          </Link>
          <Link to="/">
            {" "}
            <li className="menu-list__item">Portfolio</li>
          </Link>
          <Link to="/">
            {" "}
            <li className="menu-list__item">Shop</li>
          </Link>
          <Link to="/">
            {" "}
            <li className="menu-list__item">All Pages</li>
          </Link>
        </ul>
      </nav>
      <div className="nav-button">
        <img
          src="https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/64534eb6974c63fa102a9372_menu%20button%20white.svg"
          alt=""
        />
      </div>

      <div className="header-btn">
        <div className="header-btn__cart">
          <Link to="/">
            <img src={Cart} alt="Cart" />
            <span>0</span>
          </Link>
        </div>
        <div className="header-btn__touch">
          <Link to="/">
            <button>Get in Touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
