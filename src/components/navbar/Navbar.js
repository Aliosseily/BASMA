import React, { useState, Fragment } from "react";
import classes from "./Navbar.module.css";


const Menu = ({toggleMenuHandler}) => {
  return (
    <Fragment>
      <a href="#home">Home</a>
      <a href="#features">Features</a>
      <a href="#pages">Pages</a>
      <a href="#screenshots">Screenshots</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
    </Fragment>
  );
};


const Navbar = () => {
  const [toggleMenu, setTogglemenu] = useState(false);
  const toggleMenuHandler = () => {
    setTogglemenu((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className={classes.navbar}>
        <div className={`${classes.navbar__container} gradient__bg`}>
          <div className={`${classes.navbar__links}`}>
            <Menu/>
          </div>
        </div>
      </div>

      <div className={`${classes.navbar__menu} gradient__bg`}>
        <span className={classes.navbar__menu__icon} onClick={toggleMenuHandler}>
          {toggleMenu ? <i className="lni lni-close"></i>: <i className="lni lni-menu" ></i>}

        </span>
        { toggleMenu && (
            <div onClick={toggleMenuHandler} className= {`${classes.navbar__menu__container} scale-up-center gradient__bg`}>
               <div className= {`${classes.navbar__menu__links}`}>
                <Menu />
                </div>
            </div>
          )}
      </div>
    </Fragment>
  );
};

export default Navbar;
