import React from "react";
import Style from "./index.module.scss";
import { hashClass, openNewTab } from "utils";
import CodeLine from "components/CodeLine";
import { Information as InformationType } from "types";

type InformationComponentProps = {
  information: InformationType;
};

const InformationComponent = ({ information }: InformationComponentProps) => {
  return (
    <div className={hashClass([Style["container"]])}>
      <div className={hashClass([Style["greeting"]])}>Hi all. I am</div>
      <div className={hashClass([Style["name"]])}>{information.fullName}</div>
      <div className={hashClass([Style["position"]])}>
        &gt; {information.position}
      </div>
      <div className={hashClass([Style["comment"], "comment"])}>
        {` // you can also see it on my Github page`}
      </div>
      <CodeLine
        name="githubLink"
        value="github.com/phamtuan090720"
        propsValue={{
          onClick: () => {
            openNewTab("https://github.com/phamtuan090720");
          },
          style: { cursor: "pointer" },
        }}
      />
      <div className={hashClass([Style["comment"], "comment"])}>
        {`// you can also see it on my Linkedin`}
      </div>
      <CodeLine
        name="linkedinLink"
        value="linkedin.com/in/tuanpham0907"
        propsValue={{
          onClick: () => {
            openNewTab("https://www.linkedin.com/in/tuanpham0907/");
          },
          style: { cursor: "pointer" },
        }}
      />
    </div>
  );
};

export default InformationComponent;
