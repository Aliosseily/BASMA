import React from "react";
import classes from "./Card.module.css";
import PrimaryButton from "../button/PrimaryButton";

const Card = ({image, title, price, list }) => {
  return (
    <div className={classes.container}>
      <img width={100} src={image} alt={image} />
      <h2 className={classes.container__title}>{title}</h2>
      <h1 className={classes.container__h1}>
        <sub>$</sub>{price}
      </h1>
      <ul className={classes.container__list}>
           {list.map(({id, text}) => (
            <li key={id}>{text}</li>
           ))}

      </ul>
      <span className={classes.container__button}>
        <PrimaryButton>Sign Up</PrimaryButton>
      </span>
    </div>
  );
};

export default Card;
