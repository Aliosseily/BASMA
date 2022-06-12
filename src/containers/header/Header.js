import React from "react";
import headerImage from "../../assets/thumb-1.png";
import PrimaryButton from "../../components/button/PrimaryButton";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${classes.header} container-margin`} id="header">
      <div className={classes.header__data}>
        <h1>Creative way to showcase your App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquameius sed odit
          fugiat iusto fuga praesentium optio
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
      <div>
        <img className={classes.header__image} src={headerImage} alt="blog_image" />
      </div>
    </div>
  );
};

export default Header;
