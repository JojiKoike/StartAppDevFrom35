import React from "react";

const Highlight: React.FC = ({ ...props }) => {
  return <span className="bg-yellow-200">{props.children}</span>;
};

export default Highlight;
