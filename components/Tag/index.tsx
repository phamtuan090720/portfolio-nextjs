import React from "react";
import { hashClass } from "utils";
import Styles from "./index.module.scss";
type TagProps = {
  children: React.ReactNode;
  className?: string;
};

const Tag = ({ children = "", className = "" }: TagProps) => {
  return (
    <span
      onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
      }}
      className={hashClass([className, Styles["tag"]])}
    >
      {children}
    </span>
  );
};

export default Tag;
