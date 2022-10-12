import React from "react";
import { HomeLayout } from "components/Layouts";
import Information from "./components/Information";
import Profile from "./components/Profile";
import Styles from "./index.module.scss";
import { Information as InformationType } from "types";
type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  const information: InformationType = {
    fullName: "Pham Tuan",
    firstName: "Tuan",
    lastName: "Pham",
    position: "Front-end Developer",
    age: 22,
    phone: "+84363902003",
    email: "phamtuandev0907@gmail.com",
    dateOfBirth: 963075600000,
    skills: [
      "Development Front-end",
      "JavaScript",
      "NextJS",
      "ReactJS",
      "TypeScript",
      "MongoDb",
      "MySQL",
      "Nodejs",
      "HTML",
      "CSS",
      "Ant Design",
    ],
  };
  return (
    <HomeLayout>
      <div className={Styles["wrap"]}>
        <div className={Styles["content"]}>
          <Information information={information} />
          <Profile information={information} />
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
