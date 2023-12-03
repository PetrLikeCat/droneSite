import React from "react";
import s from "./s.module.scss";
export const CardItem: React.FC<any> = ({ title, subTitle, text }) => {
  return (
    <div className={s["table-card"]}>
      <div className={s["table-card__title"]}>
        <h3 className="">{title}</h3>
        <div className={s["table-card__border"]}></div>
      </div>
      <h4 className={s["table-card__subTitle"]}>{subTitle}</h4>
      <p className={s["table-card__text"]}>{text}</p>
    </div>
  );
};
