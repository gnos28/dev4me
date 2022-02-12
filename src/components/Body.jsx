import React from "react";
import Path from "./Path"
import LogoFull from "../img/logo-full.svg";
import "./Body.scss";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
    this.menuChange = props.menuChange;
  }

  render() {
    this.path = this.props.path;
    return (
      <div className="body">
          <Path position="body" path={this.path}  menuChange={this.menuChange}/>
        <img src={LogoFull} alt="logo" className="logoBody" draggable="false" />
      </div>
    );
  }
}

export default Body;
