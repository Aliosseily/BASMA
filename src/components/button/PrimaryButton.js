import React from "react";
import classes from "./PrimaryButton.module.css";

const PrimaryButton = ({ children }) => {
  return <button className={`${classes.button} gradient__bg`}>{children}</button>;
};

export default PrimaryButton;
