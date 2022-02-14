import React from "react";
import { menuItems } from "../data/menuItems";
import "./Path.scss";

class Path extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
    this.menuChange = props.menuChange;
    this.position = props.position;
  }
  render() {
    this.path = this.props.path;

    let textPath = "";
    menuItems.forEach((item) => {
      if (item.id === this.path) textPath = item.text;
    });

    let containerClass;
    if (this.position === "topbar") containerClass = "path-container-topbar";
    if (this.position === "body") containerClass = "path-container-body";

    return (
      <div className={containerClass}>
        <span className="path-link" onClick={() => this.menuChange("")}>
          DEV4ME
        </span>
        {this.path ? (
          <React.Fragment>
            &nbsp;&gt;&nbsp;
            <span
              className="path-link"
              onClick={() => this.menuChange(this.path)}
            >
              {textPath}
            </span>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default Path;
