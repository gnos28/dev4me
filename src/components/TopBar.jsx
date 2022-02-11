import React from "react";
import {menuItems} from "../data/menuItems";
import Logo from "../img/logo.svg";
import "./TopBar.scss";

class Path extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
  }
  render() {
    this.path = this.props.path;

    let textPath = ""
    menuItems.forEach((item) => {
        if(item.id === this.path)
            textPath = item.text
    })

    return (
      <div>
        <span className="path-link">DEV4ME</span> &gt;{" "}
        <span className="path-link">{textPath}</span>
      </div>
    );
  }
}

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
  }

  render() {
    this.path = this.props.path;
    return (
      <div className="topbar">
        <img src={Logo} alt="logo" className="logo" />
        <Path path={this.path} />
      </div>
    );
  }
}

export default TopBar;
