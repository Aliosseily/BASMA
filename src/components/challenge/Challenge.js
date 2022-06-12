import React from "react";
import classes from "./Challenge.module.css";

const Challenge = ({title, image, alt}) => {
  return (
    <div className={classes.container}>
      <div>
        <span className={classes.container__icon}>
          <img width={100} src={image} alt={alt} />
        </span>
        <h2  className={classes.container__h2}>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius saepe,
          voluptates quis enim incidunt abcaecati?
        </p>
      </div>
    </div>
  );
};

export default Challenge;
