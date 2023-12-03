import React from "react";
import s from "./ServicesDrone.module.scss";

type itemProps = {
  title: string;
  text: string;
};

export const Item: React.FC<itemProps> = ({ title, text }) => {
  return (
    <div className={s.media__number}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};
