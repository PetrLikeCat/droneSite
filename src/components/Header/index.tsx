import React from "react";
import { HeaderMenu } from "./HeaderMenu";
import { VideoPlayer } from "./VideoPlayer";
import { HeaderTitle } from "./HeaderTitle";

export const Header = () => {
  return (
    <header>
      <div className="video-background">
        <VideoPlayer />
      </div>
      <div className="container">
        <div style={{ width: "1200px;" }}>
          <HeaderMenu />
          <HeaderTitle />
        </div>
      </div>
    </header>
  );
};
