import React from "react";
import { menuItems } from "../data/menuItems";
import "./Path.scss";

class Path extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
    this.pathLevel2 = props.pathLevel2;
    this.menuChange = props.menuChange;
    this.position = props.position;
  }
  render() {
    this.path = this.props.path;
    this.pathLevel2 = this.props.pathLevel2;

    let textPath = "";
    let textPathLevel2 = ""
    menuItems.forEach((item) => {
      if (item.id === this.path && item.idLvl2 === "") textPath = item.text;
      if(this.pathLevel2 !== "")
        if (item.id === this.path && item.idLvl2 === this.pathLevel2) textPathLevel2 = item.text;
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
              onClick={() => this.menuChange(this.path, null)}
            >
              {textPath}
            </span>
          </React.Fragment>
        ) : null}
        {this.pathLevel2 ? (
          <React.Fragment>
            &nbsp;&gt;&nbsp;
            <span
              className="path-link"
              onClick={() => this.menuChange(this.path, this.pathLevel2)}
            >
              {textPathLevel2}
            </span>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default Path;
