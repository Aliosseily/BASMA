import React from "react";
import classes from "./IconWrapper.module.css";

const IconWrapper = ({ children, className }) => {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
};

export default IconWrapper;
