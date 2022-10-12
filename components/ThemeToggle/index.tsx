import { Email, Linkedin, Moon, Sun } from "components/Icon";
import React, { useState, useEffect, useRef } from "react";
import { hashClass } from "utils";
import Styles from "./index.module.scss";

export default function ThemeToggle() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleRef = useRef<HTMLHeadingElement>(null);
  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <label className={Styles["toggle-wrapper"]}>
      <div
        ref={toggleRef}
        className={hashClass([
          Styles["toggle"],
          isEnabled ? Styles["enabled"] : Styles["disabled"],
        ])}
      >
        <div className={Styles["icons"]}>
          <Moon />
          <Sun />
        </div>
        <input
          name="toggle"
          type="checkbox"
          defaultChecked={isEnabled}
          onClick={toggleState}
        />
      </div>
    </label>
  );
}
