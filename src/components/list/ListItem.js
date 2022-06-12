import React from "react";
import classes from "./ListItem.module.css";
import propTypes from "prop-types";

const ListItem = ({ text, children }) => {
  return (
    <li className={classes.container__list__item}>
      <span className={classes.container__list__icon}>
        {children}
      </span>
      {text}
    </li>
  );
};

ListItem.propTypes = {
  text: propTypes.string.isRequired,
};

export default ListItem;
