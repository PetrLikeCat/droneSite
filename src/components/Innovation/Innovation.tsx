import React from "react";
import { ButtonBase } from "../ButtonBase/Button";
import s from "./Innovation.module.scss";
export const Innovation = () => {
  return (
    <>
      <div className={s.innovation}>
        <div className={s.innovation__list}>
          <h3>Tech and Innovation</h3>
          <p className={s.innovation__blue}>
            Fly high and capture the moment with our drone<br /> photography and
            videography services.
          </p>
          <p className={s.innovation__black}>
            We offers a comprehensive collection of aerial footage and other
            content captured by drones, as well as information on the latest
            drone  technology and how it can be used in different
            industries.
          </p>
          <a href="#">
            {" "}
            <ButtonBase text="About Us" link="#" color={false}/>
          </a>
        </div>
        <div className={s.innovation__img}>
          <img
            src="https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/64538929e9a4443ae1e9fd70_drone%20image%20medium.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
