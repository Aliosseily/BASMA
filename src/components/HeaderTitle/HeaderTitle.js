import React from "react";
import classes from "./HeaderTitle.module.css";
import propTypes from "prop-types";

const HeaderTitle = ({ title, description }) => {
  return (
    <div className={classes.container}>
      <h2>{title}</h2>
      <div className={classes.container__line}></div>
      <p>{description}</p>
    </div>
  );
};

HeaderTitle.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default HeaderTitle;
