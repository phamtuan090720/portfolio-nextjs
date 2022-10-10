import * as React from "react";
import { SVGProps } from "react";

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    width="24px"
    height="24px"
    {...props}
  >
    <path
      d="M436.2 436.3h-75.8V317.5c0-28.3-.6-64.8-39.5-64.8-39.5 0-45.6 30.8-45.6 62.7v120.9h-75.8V192h72.8v33.3h1c10.2-19.2 34.9-39.5 71.9-39.5 76.8 0 91 50.6 91 116.4v134.1zM113.8 158.6c-24.4 0-44-19.8-44-44.1s19.6-44 44-44c24.3 0 44 19.7 44 44 .1 24.3-19.7 44.1-44 44.1zm38.1 277.7h-76V192h76v244.3zM474.1 0H37.8C16.9 0 0 16.5 0 36.9v438.2C0 495.5 16.9 512 37.8 512h436.3c20.9 0 37.9-16.5 37.9-36.9V36.9C512 16.5 494.9 0 474.1 0z"
      style={{
        fill: "#607B96",
      }}
    />
  </svg>
);

export default LinkedinIcon;
