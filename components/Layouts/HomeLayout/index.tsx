import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Style from "./index.module.scss";
type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className={Style["container"]}>
      <Header />
      <div className={Style["content"]}>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
