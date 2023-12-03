import React from "react";

export const ButtonBase: React.FC<any> = ({ link, text, color }) => {
  return (
    <div>
      <a href={link}>
        {" "}
        <button className={` ${color ? "btn__base" : "active__blue"}`}>
          {text}
        </button>
      </a>
    </div>
  );
};
