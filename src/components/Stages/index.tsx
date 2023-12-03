import React from "react";
import { CardItem } from "./CardItem";
import s from "./s.module.scss";
type CardItemProps = {
  id: number;
};
export const Stages = () => {
  const state = [
    {
      id: 1,
      title: "01",
      subTitle: "Maneuverability",
      text: "Drones are designed to be stable in flight, even in windy conditions.",
    },
    {
      id: 2,
      title: "02",
      subTitle: "Stability",
      text: "Drones are highly maneuverable and can fly in tight spaces.",
    },
    {
      id: 3,
      title: "03",
      subTitle: "Lightweight",
      text: "Drones can be flown for longer periods of time on a single battery charge.",
    },
    {
      id: 4,
      title: "04",
      subTitle: "Remote Control",
      text: "This makes them ideal for capturing footage in difficult areas.",
    },
  ];

  const mapState = state.map((state) => (
    <li className={s["table-wrapper"]}>
      <CardItem {...state} />
    </li>
  ));
  return (
    <div className={s.table}>
      <ul className={s["table"]}>{mapState}</ul>
      <img
        src={
          "https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/645371abc3976879f0e3085f_drone%20image%20small.webp"
        }
        alt="drone"
        className={s.table__img}
      />
    </div>
  );
};
