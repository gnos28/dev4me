import React from "react";
import LogoFull from "../img/logo-full.svg";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="landingPage">
        <div className="activityDiv">
          <span>Intranet - automatisation de vos processus</span>
        </div>
        <div className="activitiesAndLogo">
          <div className="activityDiv">
            <span>Site internet - eCommerce</span>
          </div>
          <img
            src={LogoFull}
            alt="logo"
            className="logoBody"
            draggable="false"
          />
          <div className="activityDiv">
            <span>Applications mobile</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
