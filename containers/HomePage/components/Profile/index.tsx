import React from "react";
import Style from "./index.module.scss";
import Avatar from "assets/img/avatar.jpg";
import Image from "next/image";
import CodeLine from "components/CodeLine";
import Tag from "components/Tag";

type ProfileProps = {};

const Profile = (props: ProfileProps) => {
  return (
    <div className={Style["wrap"]}>
      <div className={Style["avatar"]}>
        <Image src={Avatar} alt="avatar" />
      </div>
      <div className={Style["information"]}>
        <CodeLine name="fullName" value="Pham Tuan" />
        <CodeLine name="phone" value="+84363902003" />
        <CodeLine name="mail" value="phamtuandev0907@gmail.com" />
        <CodeLine name="dateOfBirth" value="July 9, 2000" />
      </div>
      <div className={Style["skills"]}>
        <div className={Style["title"]}>skills:</div>
        <Tag text="Front End Development" />
        <Tag text="Javascript" />
        <Tag text="ReactJs" />
        <Tag text="NextJs" />
        <Tag text="SQL" />
        <Tag text="NodeJs" />
        <Tag text="HTML" />
        <Tag text="CSS" />
      </div>
    </div>
  );
};

export default Profile;
