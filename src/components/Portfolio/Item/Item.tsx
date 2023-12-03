import React from "react";
import s from "./Item.module.scss";
import { ButtonBase } from "../../ButtonBase/Button";
import { Link } from "react-router-dom";
export const Item: React.FC<any> = ({ title, subTitle, text, img }) => {
  return (
    <div className={s.item}>
      <div className={s.item__body}>
        <div className={s.item__body__base}>
          <p className={s.item__body__subTitle}>{subTitle}</p>
          <h4>{title}</h4>
          <p className={s.item__body__text}>{text}</p>
        </div>
        <button className="header-title__btn zero" style={{ padding: 0 }}>
          <Link to="/">
            View More <span></span>
          </Link>
        </button>
      </div>
      <div className={s.item__img}>
        <a href="#">
          {" "}
          <img src={img} alt="" />
        </a>
      </div>
    </div>
  );
};
