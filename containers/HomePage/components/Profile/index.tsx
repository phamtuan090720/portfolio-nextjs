import React from "react";
import Style from "./index.module.scss";
import Avatar from "assets/img/avatar.jpg";
import Image from "next/image";
import CodeLine from "components/CodeLine";
import Tag from "components/Tag";
import { Information as InformationType } from "types";

type ProfileProps = {
  information: InformationType;
};

const renderTag = (tags: string[]) => {
  return tags.map((item: string, index) => {
    return <Tag key={index}>{item}</Tag>
  });
};

const Profile = ({ information }: ProfileProps) => {
  return (
    <div className={Style["wrap"]}>
      <div className={Style["avatar"]}>
        <Image src={Avatar} alt="avatar" />
      </div>
      <div className={Style["information"]}>
        <CodeLine name="phone" value={information?.phone} />
        <CodeLine name="email" value={information?.email} />
        <CodeLine
          name="dateOfBirth"
          value={new Date(information?.dateOfBirth)
            .toDateString()
            .split(" ")
            .slice(1)
            .join(" ")}
        />
      </div>
      <div className={Style["skills"]}>
        <div className={Style["title"]}>skills:</div>
        {renderTag(information?.skills || [])}
      </div>
    </div>
  );
};

export default Profile;
