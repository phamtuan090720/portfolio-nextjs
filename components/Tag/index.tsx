import React from "react";
import Styles from "./index.module.scss";
type TagProps = {
  text: string;
};

const Tag = ({ text = "" }: TagProps) => {
  return (
    <a href="#" className={Styles["tag"]}>
      {text}
    </a>
  );
};

export default Tag;
