import React from "react";
import LogoFull from "../img/logo-full.svg";
import LeftArrow from "../img/left-arrow.svg";
import RightArrow from "../img/right-arrow.svg";
import "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverLeft: false,
      hoverRight: false,
      animationPlayedOnce: false,
    };
  }

  handleAnimationEnd = () => {
    this.setState({ animationPlayedOnce: true });
  };

  handleMouseEnter = (side) => {
    if (side === "left") this.setState({ hoverLeft: true });
    if (side === "right") this.setState({ hoverRight: true });
  };
  
  handleMouseLeave = (side) => {
    if (side === "left") this.setState({ hoverLeft: false });
    if (side === "right") this.setState({ hoverRight: false });
  };


  render() {

    let leftArrowDivLeftSideClass = "leftArrowDiv leftArrowDiv-leftSide"
    let rightArrowDivLeftSideClass = "rightArrowDiv rightArrowDiv-leftSide"
    let activityDescriptionLeftSideClass = "activityDescription activityDescription-leftSide"
    let activityLeftSideClass = "activity activity-leftSide"

    let leftArrowDivRightSideClass = "leftArrowDiv leftArrowDiv-rightSide"
    let rightArrowDivRightSideClass = "rightArrowDiv rightArrowDiv-rightSide"
    let activityDescriptionRightSideClass = "activityDescription activityDescription-rightSide"
    let activityRightSideClass = "activity activity-rightSide"

    if(!this.state.animationPlayedOnce)
    {
        leftArrowDivLeftSideClass += " leftArrowDiv-leftSide-animation"
        rightArrowDivLeftSideClass += " rightArrowDiv-leftSide-animation"
        activityDescriptionLeftSideClass += " activityDescription-leftSide-animation"
        leftArrowDivRightSideClass += " leftArrowDiv-rightSide-animation"
        rightArrowDivRightSideClass += " rightArrowDiv-rightSide-animation"
        activityDescriptionRightSideClass += " activityDescription-rightSide-animation"
    }
    if(this.state.hoverLeft)
    {
        leftArrowDivLeftSideClass += " arrowHover"
        rightArrowDivLeftSideClass += " arrowHover"
        activityLeftSideClass += " activityHover"
    }
    if(this.state.hoverRight)
    {
        leftArrowDivRightSideClass += " arrowHover"
        rightArrowDivRightSideClass += " arrowHover"
        activityRightSideClass += " activityHover"
    }

    return (
      <div className="homeContainer">
        <div className={leftArrowDivLeftSideClass}>
          <div className="arrowMask arrowMask-leftSide"></div>
          <img
            src={LeftArrow}
            alt="left arrow"
            className="arrow leftArrow leftArrow-leftSide"
            draggable="false"
            onMouseEnter={() => this.handleMouseEnter("left")}
            onMouseLeave={() => this.handleMouseLeave("left")}
          />
        </div>
        <div className={rightArrowDivLeftSideClass}>
          <div className={activityLeftSideClass}>
            <span
            onMouseEnter={() => this.handleMouseEnter("left")}
            onMouseLeave={() => this.handleMouseLeave("left")}
            >
              Automatisation
            </span>
          </div>
          <div className={activityDescriptionLeftSideClass}>
            <span>Audit de vos processus administratifs</span>
            <span>Collecte et traitement des données</span>
            <span>Dashboard de visualisation des données</span>
            <span>Alertes automatiques</span>
            <button className="btn btn-primary homeButton"
            onMouseEnter={() => this.handleMouseEnter("left")}
            onMouseLeave={() => this.handleMouseLeave("left")}>
              en savoir plus
            </button>
          </div>
          <img
            src={RightArrow}
            alt="right arrow"
            className="arrow rightArrow rightArrow-leftSide"
            draggable="false"
            onMouseEnter={() => this.handleMouseEnter("left")}
            onMouseLeave={() => this.handleMouseLeave("left")}
          />
        </div>

        <div className={rightArrowDivRightSideClass}>
          <div className="arrowMask arrowMask-rightSide"></div>

          <img
            src={RightArrow}
            alt="right arrow"
            className="arrow rightArrow rightArrow-rightSide"
            draggable="false"
          />
        </div>
        <div className={leftArrowDivRightSideClass}>
          <div className={activityRightSideClass}>
            <span>Visibilite</span>
          </div>
          <div className={activityDescriptionRightSideClass}>
            <span>Site Internet sécurisé</span>
            <span>Application des derniers concepts UI/UX</span>
            <span>Référencement SEO optimisé</span>
            <span>Maintenance facilitée</span>
            <button className="btn btn-primary homeButton"
            onMouseEnter={() => this.handleMouseEnter("right")}
            onMouseLeave={() => this.handleMouseLeave("right")}>
              en savoir plus
            </button>
          </div>
          <img
            src={LeftArrow}
            alt="left arrow"
            className="arrow leftArrow leftArrow-rightSide"
            draggable="false"
          />
        </div>

        <div className="logoDiv">
          <img
            src={LogoFull}
            alt="logo"
            className="logoImgHome"
            draggable="false"
          />
          <div className="accroche accroche-top accroche-top-animation">
            <span>Modernisez votre activite</span>
            <span>Augmentez votre visibilite</span>
          </div>
          <div
            className="accroche accroche-bottom accroche-bottom-animation"
            onAnimationEnd={this.handleAnimationEnd}
          >
            <span>Un developpeur pour vous !</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
