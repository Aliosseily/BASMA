import React from "react";
import classes from "./Features.module.css";
import Blog from "../../components/blog/Blog";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";

const Features = () => {
  return (
    <div className="container-margin" id="features">
      <HeaderTitle
        title="Code Challenge"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi"
      />
      <div className={classes.container}>
        <Blog title="Fully functional" icon="lni lni-hand"></Blog>
        <Blog title="Fully functional" icon="lni lni-500px"></Blog>
        <Blog title="Fully functional" icon="lni lni-stop"></Blog>
        <Blog title="Location Tracking" icon="lni lni-map-marker"></Blog>
        <Blog title="Powerful Settings" icon="lni lni-cog"></Blog>
        <Blog title="Multiple Language" icon="lni lni-world"></Blog>
      </div>
    </div>
  );
};
export default Features;
