import React from "react";
import "./menuStyles.scss";
import { Home, Activity, Award } from "react-feather";

const Menu = () => {
  return (
    <div className="content_main__menu">
      <nav className="menu">
        <a href="/#" className="link__menu">
          <Home className="icon_link__menu" />
          <span className="info_link__menu">Home</span>
        </a>
        <a href="/#" className="link__menu">
          <Activity className="icon_link__menu" />
          <span className="info_link__menu">Learning</span>
        </a>
        <a href="/#" className="link__menu">
          <Award className="icon_link__menu" />
          <span className="info_link__menu">Prizes</span>
        </a>
      </nav>
    </div>
  );
};

export default Menu;
