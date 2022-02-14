import React from "react";
import LogoFull from "../img/logo-full.svg";
import { introCode } from "../data/introCode";
import "./Intro.scss";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", animationEnd: false };
    this.menuChange = props.menuChange;
    this.interval = null;
    this.codeIndex = 0;
    this.totalText = [];
  }

  typeWriter = (txt = introCode[this.codeIndex]) => {
    let currentText = this.state.text;
    let i = currentText.length;
    if (i < txt.length) {
      let strToAdd = txt.charAt(i);

      if (this.codeIndex > 1 && this.codeIndex !== introCode.length - 1) {
        for (let j = i + 1; j < txt.length; j++) strToAdd += txt.charAt(j);
      }

      this.setState({
        text: (currentText += strToAdd),
      });
      i += strToAdd.length;
    } else {
      clearInterval(this.interval);
      this.codeIndex++;
      this.totalText.push(this.state.text);

      if (this.codeIndex < introCode.length) {
        let speed = 30;
        let linePause = 2000;
        if (this.codeIndex > 1) speed = 1;
        if (this.codeIndex > 2) linePause = 2;
        if (this.codeIndex === introCode.length - 1) speed = 30;

        this.setState(
          {
            text: "",
          },
          () =>
            setTimeout(
              () =>
                (this.interval = window.setInterval(this.typeWriter, speed)),
              linePause
            )
        );
      } else {
        this.setState({
          animationEnd: true,
          text: "",
        });
      }
    }
  };

  componentDidMount() {
    this.interval = window.setInterval(this.typeWriter, 30);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    //let text = this.totalText.map(text => {text}<br/>) + this.state.text;
    let logoClass = "logoContainer";
    if (this.state.animationEnd) logoClass += " logoContainerShow";

    return (
      <div className="intro">
        <div className="matrix">
          {this.totalText.map((text, index) => (
            <div
              key={"div_" + index}
              className={index >= introCode.length - 2 ? "redLine" : null}
            >
              {text}
              {this.state.text.length === 0 &&
              index === this.totalText.length - 1 ? (
                <span className="blinking">█</span>
              ) : null}
            </div>
          ))}
          <div>
            <div
              className={
                this.totalText.length >= introCode.length - 2 ? "redLine" : null
              }
            >
              {this.state.text}
              {this.state.text.length !== 0 ? (
                <span className="blinking">█</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className={logoClass}>
            {this.state.animationEnd?<img
            src={LogoFull}
            alt="logo"
            className="logoBody"
            draggable="false"
            onClick={() => this.menuChange("home")}
          />:null}
        </div>
      </div>
    );
  }
}

export default Intro;
