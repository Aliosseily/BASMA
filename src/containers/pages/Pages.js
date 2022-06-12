import React from "react";
import classes from "./Pages.module.css";
import ListItem from "../../components/list/ListItem";
import IconWrapper from "../../components/icon/IconWrapper";
import toolsImage from "../../assets/thumb-2-2.png";
import friendsImage from "../../assets/thumb-2.png";
import Check from "../../icons/Check"
import PrimaryButton from "../../components/button/PrimaryButton"

const data = [
  {
    id: 1,
    text: " Combined with a handful of model sentence structures looks reasonable.",
  },
  {
    id: 2,
    text: " Contrary to popular belief, Lorem impusm is not simply random text.",
  },
  {
    id: 3,
    text: " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusation.",
  },
  {
    id: 4,
    text: " Natus error sit voluptatem unde omnis iste natus error sit voluptatem accusation.",
  },
  {
    id: 5,
    text: " All the lorem impusm generators on the internet tend to repeat necessary.",
  },
];
const data2 = [
  {id:1, icon:"lni lni-layers", text:"Fully layered dolor sit amet, consectetur adispisicing elit. Facere, nobis, is expedita, doloresofficiis laboriosam."},
  {id:2, icon:"lni lni-construction-hammer", text:"Customizable design color sit amet, consectetur adispisicing elit. Facere, nobis, is expedita, doloresofficiis laboriosam."},
  {id:3, icon:"lni lni-drop", text:"Drop impusm color sit amet, consectetur adispisicing elit. Facere, nobis, is expedita, doloresofficiis laboriosam."},
  {id:4, icon:"lni lni-cart-full", text:"marketing chart color sit amet, consectetur adispisicing elit. Facere, nobis, is expedita, doloresofficiis laboriosam."}

]
const Pages = () => {
  return (
    <div className="container-margin" id="pages">
      <div className={classes.container}>
        <div className={classes.container__image}>
          <img  src={toolsImage} alt="tool_image" />
        </div>
        <div className={classes.container__list}>
          <h1 className={classes.container__h1}>Work faster with powerful tools.</h1>
          <ul>
            {data.map((item) => (
              <ListItem key={item.id} text={item.text}><Check /></ListItem>
            ))}
          </ul>
          <div className={classes.container__icons}>
          <IconWrapper><i className="lni lni-alarm"></i></IconWrapper>
          <span><IconWrapper><i className="lni lni-envelope"></i></IconWrapper></span>
          <IconWrapper><i className="lni lni-video"></i></IconWrapper>
          </div>
        </div>
      </div>
      <div className={classes.container_B}>
        <div className={classes.container_B__list}>
        <h1 className={classes.container_B__h1}>Share your photos with friends easily.</h1>
        <ul>
            {data2.map((item) => (
              <ListItem key={item.id} text={item.text}><IconWrapper><i className={item.icon}></i></IconWrapper></ListItem>
            ))}
          </ul>
          <br/>
          <PrimaryButton>Learn More</PrimaryButton>
        </div>
        <div className={classes.container__image}>
        <img src={friendsImage} alt="tool_image" />
        </div>

      </div>
    </div>
  );
};

export default Pages;
