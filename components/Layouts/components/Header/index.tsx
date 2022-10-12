import React from "react";
import Navigation from "../Navigation";
import Style from "./index.module.scss";
type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <div className={Style["header"]}>
      <div className={Style["header__logo"]}>
        <a>pham-tuan</a>
      </div>
      <div className={Style["header__nav"]}>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
