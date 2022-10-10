import React from "react";

type CodeLineProps = {
  name?: string;
  value?: string;
  propsValue?: React.HTMLAttributes<HTMLDivElement>;
  propsName?: React.HTMLAttributes<HTMLDivElement>;
};

const CodeLine = ({
  name = "",
  value = "",
  propsValue,
  propsName,
}: CodeLineProps) => {
  return (
    <div className="code__line">
      <span className="const" {...propsName}>
        const
      </span>{" "}
      <span className="name">{name}</span>{" "}
      <span className="isEqualTo"> = </span>
      <span className="value" {...propsValue}>
        “{value}”
      </span>
      <span className="text">;</span>
    </div>
  );
};

export default CodeLine;
