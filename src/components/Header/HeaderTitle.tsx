import React from "react";
import { Link } from "react-router-dom";

export const HeaderTitle = () => {
  return (
    <div className="header-title">
      <div className="header-title__wrapper">
        <h1 className="header-title__item">A New Era of Drones</h1>
        <div className="header-title__text">
          <p>
            Even more speed. Even more stability. Everything youmight need – in
            a brand new Drone.
          </p>
          <button className="header-title__btn">
            <Link to="/">
              Read More About Us <span></span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
