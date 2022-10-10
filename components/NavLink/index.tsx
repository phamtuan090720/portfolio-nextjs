import React from "react";
import { useRouter } from "next/router";
import Styles from "./index.module.scss";
import { hashClass } from "utils";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  className?: string;
  customStyle?: {
    active?: string;
    core?: string;
  };
  disable?: boolean;
};

const NavLink = ({
  children,
  href,
  active = false,
  className = "",
  customStyle,
}: NavLinkProps) => {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href || "/");
  };
  return (
    <a
      href={href || "/"}
      onClick={handleClick}
      className={hashClass([
        className,
        customStyle?.core ? customStyle.core : Styles["nav-link"],
        router.asPath === href || active
          ? customStyle?.active
            ? customStyle.active
            : Styles["active"]
          : "",
      ])}
    >
      {children}
    </a>
  );
};

export default NavLink;
