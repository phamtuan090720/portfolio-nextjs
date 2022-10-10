import NavLink from "components/NavLink";
import React from "react";
import Style from "./index.module.scss";
import { useRouter } from "next/router";
import ThemeToggle from "components/ThemeToggle";
type NavigationProps = {};

const Navigation = ({}: NavigationProps) => {
  const router = useRouter();
  return (
    <div className={Style["nav"]}>
      <div className={Style["nav__left"]}>
        <div className={Style["nav__item"]}>
          <NavLink
            href="/home"
            className={Style["nav__link"]}
            customStyle={{ active: Style["nav__link--active"] }}
            active={router.asPath == "/"}
          >
            _hello
          </NavLink>
        </div>
        <div className={Style["nav__item"]}>
          <NavLink
            href="/about"
            className={Style["nav__link"]}
            customStyle={{ active: Style["nav__link--active"] }}
          >
            _about-me
          </NavLink>
        </div>
        <div className={Style["nav__item"]}>
          <NavLink
            href="/projects"
            className={Style["nav__link"]}
            customStyle={{ active: Style["nav__link--active"] }}
          >
            _projects
          </NavLink>
        </div>
        <div className={Style["nav__item"]}>
          <NavLink
            href="/certifications"
            className={Style["nav__link"]}
            customStyle={{ active: Style["nav__link--active"] }}
          >
            _certifications
          </NavLink>
        </div>
        <div className={Style["nav__item"]}>
          <NavLink
            href="/contact"
            className={Style["nav__link"]}
            customStyle={{ active: Style["nav__link--active"] }}
          >
            _contact-me
          </NavLink>
        </div>
      </div>
      <div className={Style["nav__right"]}>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navigation;
