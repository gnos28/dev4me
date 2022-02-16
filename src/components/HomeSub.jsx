import React from "react";
import LeftArrow from "../img/left-arrow.svg";
import RightArrow from "../img/right-arrow.svg";
import LogoFull from "../img/logo-full.svg";
import "./HomeSub.scss";

class HomeSub extends React.Component {
  render() {
    let logoImgHomeClass = "logoImgHome";
    let leftArrowLeftSideClass = "arrowSub";
    let rightArrowLeftSideClass = "arrowSub";

    return (
      <div className="homeContainer">
          <div className="titleDiv">
          <img
              src={LeftArrow}
              alt="left arrow"
              className={leftArrowLeftSideClass}
              draggable="false"
            />
            <span>AUTOMATISATION</span>
            <img
              src={RightArrow}
              alt="right arrow"
              className={rightArrowLeftSideClass}
              draggable="false"
            />
          </div>
        <div className="logoDiv">
          <img
            src={LogoFull}
            alt="logo"
            className={logoImgHomeClass}
            draggable="false"
          />
        </div>
      </div>
    );
  }
}

export default HomeSub;
