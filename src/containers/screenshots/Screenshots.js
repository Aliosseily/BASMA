import React from "react";
import Challenge from "../../components/challenge/Challenge";
import classes from "./Screenshots.module.css";
import download from "../../assets/download.png";
import settings from "../../assets/settings.png";
import app from "../../assets/app.png";

const Screenshots = () => {
  return (
    <div className="container-margin gradient__bg" id="screenshots">
      <div className={classes.container}>
        <div className={classes.container__header}>
          <h1>Code Challenge</h1>
          <p className={classes.container__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo add iste impusm officiis deleniti
            asperiores sit.
          </p>
        </div>
        <div className={classes.container__actions}>
          <Challenge image={download} title="Install the App" />
          <div className={classes.container__actions_second}>
          <span className={classes.container__actions_second_icon}><i className="lni lni-chevron-right"></i></span>
            <Challenge image={settings} title="Setup your profile" />
            <span className={classes.container__actions_second_icon}><i className="lni lni-chevron-right"></i></span>
          </div>
          <Challenge image={app} title="Enjoy the features!" />
        </div>
      </div>
    </div>
  );
};

export default Screenshots;
