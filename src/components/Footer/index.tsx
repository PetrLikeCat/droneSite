import React from "react";
import s from "./Footer.module.scss";
import { ButtonBase } from "../ButtonBase/Button";
import { Link } from "react-router-dom";
export const Footer = () => {
  const state = [
    { title: "Linkedin", link: "/" },
    { title: "YouTube", link: "/" },
    { title: "Instagram", link: "/" },
    { title: "Twitter", link: "/" },
  ];

  const stateMap = state.map((item)=>(<li><Link to={item.link}>{item.title}</Link></li>))
  return (
    <div className={s.footer__wrapper}>
      <div className={s.footer}>
        <Link to="/">
          <img
            className="header__logo"
            src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/64522ec803e23e80fd7d970b_white%20logo.svg"
            alt="logo"
          />
        </Link>
        <h2>Let’s cooperate together</h2>
        <p>
          Experience heightened speed, improved stability, and a complete suite
          of features.
        </p>
        <ButtonBase text={"Get a Free Quote"} color={true} />
        <span className={s.line}></span>
        <div className={s.footer__list}>
          <div className={s.footer__list__item}>
            <div>
             © Drone. All Rights Reserved 2023. <span>Licensing</span> 
            </div>
          </div>
          <div className={s.footer__list__network}>Check our social media –<ul className={s.footer__list__network}>{stateMap}</ul></div>
        </div>
      </div>
    </div>
  );
};
