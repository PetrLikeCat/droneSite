import React from "react";
import s from "./ServicesDrone.module.scss";
import { Item } from "./Item";
export const ServicesDrone = () => {
  const state = [
    { id: 0, title: "4K", text: "Photo Resolution" },
    { id: 1, title: "1000+", text: "Projects Done" },
    { id: 2, title: "6+", text: "Years Experience" },
  ];
  const mapState = state.map((item) => (
    <div>
      <Item {...item} />
    </div>
  ));
  return (
    <div className={s.media__wrapper}>
      <div className={s.media}>
        <h2>services for producing aerial photography and videos</h2>
        <div className={s.media__list}>{mapState}</div>
        <a href="#">
          {" "}
          <button className={s.media__button}>learn more</button>
        </a>
      </div>
    </div>
  );
};


