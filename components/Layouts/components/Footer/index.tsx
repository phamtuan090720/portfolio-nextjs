import { Email, Github, Linkedin, Skype } from "components/Icon";
import React from "react";
import { openNewTab } from "utils";
import Style from "./index.module.scss";
type FooterProps = {};

const Footer = (props: FooterProps) => {
  return (
    <div className={Style["footer"]}>
      <div className={Style["footer__left"]}>
        <div className={Style["left__item"]}>
          <div className={Style["footer__text"]}>find me in:</div>
        </div>
        <div className={Style["left__item"]}>
          <div
            className={Style["footer__social"]}
            onClick={() => {
              const skypeName = "live:mr.tuan1749";
              openNewTab("skype:" + skypeName + "?chat");
            }}
          >
            <div className={Style["social__item"]}>
              <Skype
                className={[Style["social__icon"], Style["email__icon"]].join(
                  " "
                )}
              />
            </div>
          </div>
        </div>
        <div className={Style["left__item"]}>
          <div
            className={Style["footer__social"]}
            onClick={() => {
              // openNewTab("https://www.google.com.vn/?hl=vi");
            }}
          >
            <div className={Style["social__item"]}>
              <Email
                className={[Style["social__icon"], Style["email__icon"]].join(
                  " "
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Style["footer__right"]}>
        <div
          className={Style["footer__github"]}
          onClick={() => {
            openNewTab("https://github.com/phamtuan090720");
          }}
        >
          <div className={Style["footer__text"]}>@tuanpham0907</div>
          <Github className={Style["github__icon"]} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
