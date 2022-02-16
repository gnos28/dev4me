import React from "react";
import Path from "./Path";
import SideBar from "./SideBar";
import Logo from "../img/logo.svg";
import "./TopBar.scss";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
    this.pathLevel2 = props.pathLevel2;
    this.menuChange = props.menuChange;
  }

  render() {
    this.path = this.props.path;
    this.pathLevel2 = this.props.pathLevel2;

    return (
      <div className="topbar">
        <img
          src={Logo}
          alt="logo"
          className="logo"
          draggable="false"
          onClick={() => this.menuChange("")}
        />
        <Path
          path={this.path}
          pathLevel2={this.pathLevel2}
          menuChange={this.menuChange}
          position="topbar"
        />
        <SideBar
          menuChange={this.menuChange}
          path={this.path}
          position="topbar"
        />
      </div>
    );
  }
}

export default TopBar;
