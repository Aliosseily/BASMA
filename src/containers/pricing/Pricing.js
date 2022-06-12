import React, { Fragment } from "react";
import classes from "./pricing.module.css";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Card from "../../components/Card/Card";
import bike from "../../assets/bike.png";
import team from "../../assets/download-bg.jpeg";
import motorbike from "../../assets/motorbike.png";
import googleplay from "../../assets/google-play.png";
import appstore from "../../assets/app-store.png";
import teessset from "../../assets/newsletter-background.png"
import PrimaryButton from "../../components/button/PrimaryButton";

const list = [
  { id: 1, text: "5GB Linux Web Space" },
  { id: 2, text: "5 MySQL Databases" },
  { id: 3, text: "24/7 Tech Support" },
  { id: 4, text: "Daily Backups" },
];

const list2 = [
  { id: 1, text: "10GB Linux Web Space" },
  { id: 2, text: "50 MySQL Databases" },
  { id: 3, text: "Unlimited Email" },
  { id: 4, text: "Daily Backups" },
];

const Pricing = () => {
  return (
    <div className="container-margin" id="pricing">
      <div className={classes.container}>
        <HeaderTitle
          title="BASMA code Challenge"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. laborum digmissmoss quae quo ad iste ipsum officiis deleniti asperiores sit."
        />
        <div className={classes.container__card}>
          <Card title="BASIC" price={49} image={bike} list={list} />
          <Card title="PRO" price={199} image={motorbike} list={list2} />
        </div>
        <div className={classes.container__notsure}>
          <p>
            Not sure what you choose? <span>Contact Us</span>
          </p>
        </div>
        <div className={classes.container__image}>
          <div>
            <h1 className={classes.container__image_title}>
              BASMA is available for all devices
            </h1>
            <p className={classes.container__image_description}>
              sApp is available for all devices. consectetur adipisicing elit.
              Itague at harum quam explicabo. Aliquam optio, delectus, dolorem
              quod neque eos totam. Delectus quae animi tenetur voluptates
              doloribus commodi dicta modi aliquid deserunt, quis maiores
              nescuint autem, aperiam natus.
            </p>
            <div className={classes.container__image_store}>
              <img
                className={classes.store}
                src={googleplay}
                alt="google-play"
              />
              <img className={classes.store} src={appstore} alt="app-store" />
            </div>
            <p className={classes.container__image_footer}>
              * Available on iPhone, iPad and all Andriod devices
            </p>
          </div>
        </div>
    </div>
    <div className={classes.container__newseletter}>
      {/* <img src={teessset} alt="test" style={{width:"100%"}}/> */}
          <h1 className={classes.container__newseletter_header}>Subscribe to get updates</h1>
          <p className={classes.container__newseletter_description}>
            By subscribing you will get newsletter, promotions adipisicing elit.
            Archeticto beatae, asperiores tempore repudiandae saepe aspernature
            unde voluptate sapiente quia ex.
          </p>
          <div className={classes.container__newseletter_form}>
          <input className={classes.container__newseletter_input} placeholder="Enter your email" />
          <PrimaryButton>Subscribe</PrimaryButton>
          </div>
        </div>
      </div>
  );
};

export default Pricing;
