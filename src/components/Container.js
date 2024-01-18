import React from "react";

const Container = ({ className = null, children }) => {
  const dfltClss = `container`;
  const isClss = className ? `${dfltClss} ${className}` : `${dfltClss}`;

  return (
    <>
      <div className={`${isClss}`}>{children}</div>
    </>
  );
};

export default Container;
