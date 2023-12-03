import React from "react";
import s from "./LogoDrones.module.scss"
export const LogoDrones = () => {
  const stateLogo = [
    "https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/645399b0e735de3aff3db736_zendesk%20logo%20.svg",
    "https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/645399d5fed057118130abfe_bitbucket%20logo%20.svg",
    "https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/645399f845747b304ae140ce_bubble%20logo.svg",
    "https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/64539a16a79e9d029b41e481_useberry%20logo%20.svg",
    "https://assets-global.website-files.com/6450b31696e25f8aa6cdd7b0/64539a3a51a04642a84e62a1_circle%20logo.svg",
  ];
  const mapState = stateLogo.map((item) => (
    <img src={item} alt={"logo Drones"} />
  ));
  return <div className={s.logoDrone}>{mapState}</div>;
};
