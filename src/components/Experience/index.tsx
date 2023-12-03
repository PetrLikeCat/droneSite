import React from "react";
import { ButtonBase } from "../ButtonBase/Button";
import s from "./Experience.module.scss";

export const Experience = () => {
  return (
    <>
      <div className={s.experience} style={{ marginTop: "120px" }}></div>
      <div className={s.experience}>
        <div className={s.experience__list__wrapper}>
          <div className={s.experience__list}>
            <h4>Experience a unique perspective of the world</h4>
            <p>
              We provide a comprehensive range of services and information
              related to drones, including aerial photography, videography,
              surveying, mapping.
            </p>
            <ButtonBase text="Learn More" color="true" link="#" />
            <a href="#" className={s.experience__triangle}>
              <img
                src="https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/6454b5c62c310529a5d35c90_right%20arrow.svg"
                alt="triangle"
              />
            </a>
          </div>
        </div>
        <div className={s.experience__img__wrapper}>
          <div className={s.experience__img}>
            <h3>Fly higher, farther, and faster</h3>
          </div>
        </div>
      </div>
      <div className={s.experience}>
        <div className={s.experience__img__wrapper}>
          <div className={s.experience__img}>
            <h3>Fly higher, farther, and faster</h3>
          </div>
        </div>
        <div className={s.experience__list__wrapper}>
          <div className={s.experience__list}>
            <h4>Experience a unique perspective of the world</h4>
            <p>
              We provide a comprehensive range of services and information
              related to drones, including aerial photography, videography,
              surveying, mapping.
            </p>
            <ButtonBase text="Learn More" color="true" link="#" />
            <a href="#" className={s.experience__triangle}>
              <img
                src="https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/6454b5c62c310529a5d35c90_right%20arrow.svg"
                alt="triangle"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
