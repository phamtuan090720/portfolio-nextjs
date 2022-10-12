import React from "react";
import { SVGProps } from "react";

const SunIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.995 12a5.013 5.013 0 0 0 5.007 5.007A5.013 5.013 0 0 0 17.009 12a5.013 5.013 0 0 0-5.007-5.007A5.013 5.013 0 0 0 6.995 12ZM11 19h2v3h-2v-3Zm0-17h2v3h-2V2Zm-9 9h3v2H2v-2Zm17 0h3v2h-3v-2ZM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414-2.121 2.121ZM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122-1.414-1.414ZM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122-1.414 1.414ZM19.778 18.364l-1.414 1.414-2.122-2.122 1.414-1.414 2.122 2.122Z" />
    </svg>
  );
};

export default SunIcon;
