import React from "react";
import { HomeLayout } from "components/Layouts";
import Information from "./components/Information";
import Profile from "./components/Profile";
import Styles from "./index.module.scss";
type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <HomeLayout>
      <div className={Styles["wrap"]}>
        <div className={Styles["content"]}>
          <Information />
          <Profile />
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
