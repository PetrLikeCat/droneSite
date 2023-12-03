import React from "react";
import { Header } from "../components/Header";
import { Stages } from "../components/Stages";
import { ServicesDrone } from "../components/ServicesDrone";
import { Innovation } from "../components/Innovation/Innovation";
import { LogoDrones } from "../components/logoDrones/LogoDrones";
import { Explore } from "../components/Explore";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Portfolio } from "../components/Portfolio";

export const Home = () => {
  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      <div className="container">
        <Stages />
      </div>
      <ServicesDrone />
      <div className="line-gray" style={{ marginTop: "120px" }}></div>
      <div className="container">
        <Innovation />
      </div>
      <div className="line-gray"></div>
      <div className="container">
        <LogoDrones />
      </div>
      <div className="line-gray"></div>
      <Explore />
      {/* <div className="container">
        <Experience />
      </div> */}
      <div className="container">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};
