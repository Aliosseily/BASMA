import React from "react";
import classes from "./Blog.module.css";

const Blog = ({ icon, title }) => {
  return (
    <div className={classes.container}>
      <i className={`${icon} ${classes.container__icon}`}></i>
      <h3 className={classes.container__header}>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum
      </p>
    </div>
  );
};

export default Blog;
