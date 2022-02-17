import React from "react";
import HomeAutomatisation from "./HomeAutomatisation";
import HomeVisibilite from "./HomeVisibilite";
import LogoFull from "../img/logo-full.svg";
import LeftArrow from "../img/left-arrow.svg";
import RightArrow from "../img/right-arrow.svg";
import "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
    this.pathLevel2 = props.pathLevel2;
    this.menuChange = props.menuChange;
    this.handleHomeAnimationEnd = props.handleHomeAnimationEnd;
    this.homeAnimationPlayedOnce = props.homeAnimationPlayedOnce;
    this.timer = null;

    this.state = {
      hoverLeft: false,
      hoverRight: false,
      clickLeft: false,
      clickRight: false,
    };
  }

  handleMouseEnter = (side) => {
    console.log("********* handleMouseEnter");
    if (side === "left" && !this.state.clickLeft)
      this.setState({ hoverLeft: true });
    if (side === "right" && !this.state.clickRight)
      this.setState({ hoverRight: true });
  };

  handleMouseLeave = (side) => {
    console.log("********* handleMouseLeave");
    if (side === "left" && !this.state.clickLeft)
      this.setState({ hoverLeft: false });
    if (side === "right" && !this.state.clickRight)
      this.setState({ hoverRight: false });
  };

  handleClick = (target) => {
    console.log("********* handleClick");
    this.handleHomeAnimationEnd(false);
    if (target === "left") this.setState({ clickLeft: true, hoverLeft: false });
    if (target === "right")
      this.setState({ clickRight: true, hoverRight: false });

    this.timer = setTimeout(() => {
      //this.setState({ clickLeft: false, clickRight: false });
      this.menuChange("home", target);
      console.log("this.timer", this.timer);
      clearInterval(this.timer);
      this.timer = null;
    }, 600);
  };

  componentWillUnmount() {
    console.log("********* componentWillUnmount");
    if (this.timer) clearInterval(this.timer);
  }

  componentDidUpdate() {
    console.log("********* componentDidUpdate");
    if (
      !this.pathLevel2 &&
      this.timer === null &&
      (this.state.clickLeft || this.state.clickRight)
    ) {
      console.log("this.setState({ clickLeft: false, clickRight: false });");
      this.homeAnimationPlayedOnce = true;
      this.setState({ clickLeft: false, clickRight: false });
    }
  }

  render() {
    this.path = this.props.path;
    this.pathLevel2 = this.props.pathLevel2;

    console.log("********** renderHome ", this.path, this.pathLevel2, this);

    let containerDivClass = "homeContainer"
    let logoDivClass = "logoDiv"

    let leftArrowDivLeftSideClass = "leftArrowDiv leftArrowDiv-leftSide";
    let rightArrowDivLeftSideClass = "rightArrowDiv rightArrowDiv-leftSide";
    let activityDescriptionLeftSideClass =
      "activityDescription activityDescription-leftSide";
    let activityLeftSideClass = "activity activity-leftSide";

    let leftArrowDivRightSideClass = "leftArrowDiv leftArrowDiv-rightSide";
    let rightArrowDivRightSideClass = "rightArrowDiv rightArrowDiv-rightSide";
    let activityDescriptionRightSideClass =
      "activityDescription activityDescription-rightSide";
    let activityRightSideClass = "activity activity-rightSide";

    let accrocheTopClass = "accroche accroche-top";
    let accrocheBottomClass = "accroche accroche-bottom";

    let arrowMaskLeftSideClass = "arrowMask arrowMask-leftSide";
    let leftArrowLeftSideClass = "arrow leftArrow leftArrow-leftSide";
    let buttonClass = "btn btn-primary homeButton";
    let rightArrowLeftSideClass = "arrow rightArrow rightArrow-leftSide";
    let arrowMaskRightSideClass = "arrowMask arrowMask-rightSide";
    let rightArrowRightSideClass = "arrow rightArrow rightArrow-rightSide";
    let leftArrowRightSideClass = "arrow leftArrow leftArrow-rightSide";
    let logoImgHomeClass = "logoImgHome";

    if (!this.homeAnimationPlayedOnce) {
      logoDivClass += " logoDiv-animation"

      leftArrowDivLeftSideClass += " leftArrowDiv-leftSide-animation";
      rightArrowDivLeftSideClass += " rightArrowDiv-leftSide-animation";
      activityDescriptionLeftSideClass +=
        " activityDescription-leftSide-animation";
      leftArrowDivRightSideClass += " leftArrowDiv-rightSide-animation";
      rightArrowDivRightSideClass += " rightArrowDiv-rightSide-animation";
      activityDescriptionRightSideClass +=
        " activityDescription-rightSide-animation";
      accrocheTopClass += " accroche-top-animation";
      accrocheBottomClass += " accroche-bottom-animation";
    }
    if (this.state.hoverLeft && !this.state.clickLeft) {
      leftArrowDivLeftSideClass += " arrowHover";
      rightArrowDivLeftSideClass += " arrowHover";
      activityLeftSideClass += " activityHover";
    }
    if (this.state.hoverRight && !this.state.clickRight) {
      leftArrowDivRightSideClass += " arrowHover";
      rightArrowDivRightSideClass += " arrowHover";
      activityRightSideClass += " activityHover";
    }

    if (this.state.clickLeft || this.state.clickRight) {
      console.log("add fadeOut class");
      accrocheTopClass += " fadeOut";
      accrocheBottomClass += " fadeOut";
      arrowMaskLeftSideClass += " fadeOut";
      buttonClass += " fadeOut";
      logoImgHomeClass += " fadeOut";

      if (this.state.clickLeft) {
        arrowMaskRightSideClass += " fadeOut";
        rightArrowRightSideClass += " fadeOut";
        leftArrowRightSideClass += " fadeOut";
        activityDescriptionLeftSideClass += " fadeOut";
        leftArrowDivRightSideClass += " fadeOut";
        rightArrowDivRightSideClass += " fadeOut";
        activityDescriptionRightSideClass += " fadeOut";
        activityRightSideClass += " fadeOut";

        leftArrowDivLeftSideClass += " leftArrowDiv-leftSide-animTitle";
        rightArrowDivLeftSideClass += " rightArrowDiv-leftSide-animTitle";
        activityLeftSideClass += " activity-leftSide-animTitle";

        let moveOut = () => this.handleClick("left");
      }
      if (this.state.clickRight) {
        arrowMaskLeftSideClass += " fadeOut";
        rightArrowLeftSideClass += " fadeOut";
        leftArrowLeftSideClass += " fadeOut";
        activityDescriptionRightSideClass += " fadeOut";
        leftArrowDivLeftSideClass += " fadeOut";
        rightArrowDivLeftSideClass += " fadeOut";
        activityDescriptionLeftSideClass += " fadeOut";
        activityLeftSideClass += " fadeOut";

        leftArrowDivRightSideClass += " leftArrowDiv-rightSide-animTitle";
        rightArrowDivRightSideClass += " rightArrowDiv-rightSide-animTitle";
        activityRightSideClass += " activity-rightSide-animTitle";

        let moveOut = () => this.handleClick("right");
      }
    }

    if (this.props.pathLevel2 === "left") {
      containerDivClass += " scrollingBody"

      leftArrowDivLeftSideClass += " leftArrowDiv-leftSide-Title";
      rightArrowDivLeftSideClass += " rightArrowDiv-leftSide-Title";
      activityLeftSideClass += " activity-leftSide-Title";
    }

    if (this.props.pathLevel2 === "right") {
      containerDivClass += " scrollingBody"

      leftArrowDivLeftSideClass += " leftArrowDiv-rightSide-Title";
      rightArrowDivLeftSideClass += " rightArrowDiv-rightSide-Title";
      activityLeftSideClass += " activity-rightSide-Title";
    }

    return (
      <div className={containerDivClass}>
        {!this.pathLevel2 || this.pathLevel2 === "left" ? (
          <React.Fragment>
            <div className={leftArrowDivLeftSideClass}>
              <div className={arrowMaskLeftSideClass}></div>
              <img
                src={LeftArrow}
                alt="left arrow"
                className={leftArrowLeftSideClass}
                draggable="false"
                onMouseEnter={() => this.handleMouseEnter("left")}
                onMouseLeave={() => this.handleMouseLeave("left")}
                onClick={() => this.handleClick("left")}
              />
            </div>
            <div className={rightArrowDivLeftSideClass}>
              <div className={activityLeftSideClass}>
                <span
                  onMouseEnter={() => this.handleMouseEnter("left")}
                  onMouseLeave={() => this.handleMouseLeave("left")}
                  onClick={() => this.handleClick("left")}
                >
                  Automatisation
                </span>
              </div>

              {!this.pathLevel2 ? (
                <div className={activityDescriptionLeftSideClass}>
                  <span>Audit de vos processus administratifs</span>
                  <span>Collecte et traitement des données</span>
                  <span>Dashboard de visualisation des données</span>
                  <span>Alertes automatiques</span>
                  <button
                    className={buttonClass}
                    onMouseEnter={() => this.handleMouseEnter("left")}
                    onMouseLeave={() => this.handleMouseLeave("left")}
                    onClick={() => this.handleClick("left")}
                  >
                    en savoir plus
                  </button>
                </div>
              ) : null}

              <img
                src={RightArrow}
                alt="right arrow"
                className={rightArrowLeftSideClass}
                draggable="false"
                onMouseEnter={() => this.handleMouseEnter("left")}
                onMouseLeave={() => this.handleMouseLeave("left")}
                onClick={() => this.handleClick("left")}
              />
            </div>
          </React.Fragment>
        ) : null}

        {!this.pathLevel2 || this.pathLevel2 === "right" ? (
          <div className={rightArrowDivRightSideClass}>
            <div className={arrowMaskRightSideClass}></div>

            <img
              src={RightArrow}
              alt="right arrow"
              className={rightArrowRightSideClass}
              draggable="false"
              onMouseEnter={() => this.handleMouseEnter("right")}
              onMouseLeave={() => this.handleMouseLeave("right")}
              onClick={() => this.handleClick("right")}
            />
          </div>
        ) : null}

        {!this.pathLevel2 || this.pathLevel2 === "right" ? (
          <div className={leftArrowDivRightSideClass}>
            <div className={activityRightSideClass}>
              <span
                onMouseEnter={() => this.handleMouseEnter("right")}
                onMouseLeave={() => this.handleMouseLeave("right")}
                onClick={() => this.handleClick("right")}
              >Visibilite</span>
            </div>
            <div className={activityDescriptionRightSideClass}>
              <span>Site Internet sécurisé</span>
              <span>Application des derniers concepts UI/UX</span>
              <span>Référencement SEO optimisé</span>
              <span>Maintenance facilitée</span>
              <button
                className={buttonClass}
                onMouseEnter={() => this.handleMouseEnter("right")}
                onMouseLeave={() => this.handleMouseLeave("right")}
                onClick={() => this.handleClick("right")}
              >
                en savoir plus
              </button>
            </div>
            <img
              src={LeftArrow}
              alt="left arrow"
              className={leftArrowRightSideClass}
              draggable="false"
              onMouseEnter={() => this.handleMouseEnter("right")}
              onMouseLeave={() => this.handleMouseLeave("right")}
              onClick={() => this.handleClick("right")}
            />
          </div>
        ) : null}

        {!this.pathLevel2 ? (
          <div className={logoDivClass}>
            <img
              src={LogoFull}
              alt="logo"
              className={logoImgHomeClass}
              draggable="false"
            />
            <div className={accrocheTopClass}>
              <span>Modernisez votre activite</span>
              <span>Augmentez votre visibilite</span>
            </div>
            <div
              className={accrocheBottomClass}
              onAnimationEnd={this.handleHomeAnimationEnd}
            >
              <span>Un developpeur pour vous !</span>
            </div>
          </div>
        ) : null}
        {this.pathLevel2 === "left"? <HomeAutomatisation/>:null}
        {this.pathLevel2 === "right"? <HomeVisibilite/>:null}
      </div>
    );
  }
}

export default Home;
