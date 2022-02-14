import React from "react";
import LogoFull from "../img/logo-full.svg";
import LeftArrow from "../img/left-arrow.svg";
import RightArrow from "../img/right-arrow.svg";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="splitDiv">
          <div className="activityDiv">
            <img
              src={LeftArrow}
              alt="left arrow"
              className="arrow leftArrow"
              draggable="false"
            />

            <img
              src={RightArrow}
              alt="right arrow"
              className="arrow rightArrow"
              draggable="false"
            />
          </div>
          <div className="activityDescription">
            <span>Automatisation Processus</span>
          </div>
        </div>
        <div className="splitDiv">
          <div className="activityDiv">
            <img
              src={LogoFull}
              alt="logo"
              className="logoHome"
              draggable="false"
            />
          </div>
        </div>
        <div className="splitDiv">
          <div className="activityDiv">
            <img
              src={LeftArrow}
              alt="left arrow"
              className="arrow leftArrow"
              draggable="false"
            />

            <img
              src={RightArrow}
              alt="right arrow"
              className="arrow rightArrow"
              draggable="false"
            />
          </div>
          <div className="activityDescription">
            <span>Presence Numerique</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
