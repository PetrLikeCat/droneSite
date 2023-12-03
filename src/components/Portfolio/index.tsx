import React from "react";
import { ButtonBase } from "../ButtonBase/Button";
import { Item } from "./Item/Item";
import s from "./Portfolio.module.scss";
export const Portfolio = () => {
  const state = [
    {
      title: "May 1, 2023",
      subTitle: "Aerial Car Photography",
      text: "This portfolio showcases cars from a unique aerial perspective, captured by drones. It includes shots of cars on the road and in scenic locations.",
      img: "https://assets-global.website-files.com/6450b31696e25f3bf1cdd7bf/6454c3f7a687a33d64af28f7_car%20image-p-1080.jpg",
    },
    {
      title: "April 30, 2023",
      subTitle: "Drone Filmography",
      text: "Drone Filmography highlights the potential of drones to capture stunning footage that allows filmmakers to tell stories in new and innovative ways.",
      img: "https://assets-global.website-files.com/6450b31696e25f3bf1cdd7bf/6454cb842b990ad65383e134_forest%20image-p-500.jpg",
    },
    {
      title: "April 25, 2023",
      subTitle: "Wedding Moments",
      text: "This portfolio presents a collection of memorable moments from weddings captured by drones.These shots offer a bird's eye view of the special moments.",
      img: "https://assets-global.website-files.com/6450b31696e25f3bf1cdd7bf/6454cb9be252c442ab761f59_wedding%20image-p-1080.jpg",
    },
  ];
  const statePortfol = state.map((item, i) => (
    <li key={i}>{<Item {...item} />}</li>
  ));
  return (
    <div className={s.Portfolio}>
      <h3>Portfolio</h3>
      <div className={s.Portfolio__list}>
        <h2>Our recent work</h2>
        <ButtonBase text={"View More"} />
      </div>
      {statePortfol}
    </div>
  );
};
