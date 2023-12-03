import React from "react";
import s from "./Explore.module.scss";
export const Explore = () => {
  return (
    <div className={s.section}>
      <div className={s.section__img}>
        <img
          src="https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/64539e3b536db954962456be_drone%20image%20bg.webp"
          alt=""
        />
      </div>

      <div className={s.list__wrapper}>
        <div className={s.list}>
          <h4>New Technology</h4>
          <h3>Explore the world from a new perspective</h3>
          <p>Unleash your creativity with our drone equipment and services.</p>
          <div className={s.list__link}>
            <a href="#">
              Great Experience <span></span>
            </a>
          </div>
          <div className={s.list__link}>
            <a href="#">
              Remote Control <span></span>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};
