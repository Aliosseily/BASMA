import React from "react";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import IconWrapper from "../../components/icon/IconWrapper";
import ListItem from "../../components/list/ListItem";
import Call from "../../icons/Call";
import House from "../../icons/House";
import Mail from "../../icons/Mail";
import classes from "./Contact.module.css";
import PrimaryButton from "../../components/button/PrimaryButton"

const Contact = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="container-margin" id="contact">
      <div className={classes.container}>
        <HeaderTitle 
        title="Stay Tuned"
        description="Lorem ipsum dolor sit amet, adipisicing elit. 
        Laborum abcaecati dignissmos quae quo ad iste ipsum officiis deleniti asperiores sit."
        />
        <div  className={classes.container__body}>
            <div className={classes.container__body_info}>
                <p>Contrary to popular beleif, Lorem impusm is not simply random text. it has 
                   roots in a piece of classical latin literature from 45 BC, making it over
                   2000 years old
                </p>
                <ListItem text="Vestibulum nulla libero, tincidunt suscipit diam, DC 2002"><IconWrapper className="gradient__bg"><House /></IconWrapper></ListItem>
                <ListItem text="+1 230 456 789-012 345 6789 "><IconWrapper className="gradient__bg"><Call /></IconWrapper></ListItem>
                <ListItem text="exampledomain @domain.com"><IconWrapper className="gradient__bg"><Mail /></IconWrapper></ListItem>
           
            </div>
            <div className={classes.container__form}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="subject"/>
                <textarea rows={7} placeholder="Message" />
                <PrimaryButton><i className="lni lni-telegram-original"></i> Send Message</PrimaryButton>
            </div>
        </div>
        <div className={classes.scrollToTop_icon} onClick={scrollTop}>
      <i className="lni lni-arrow-up-circle" ></i>
      </div>
      </div>

    </div>
  );
};

export default Contact;
