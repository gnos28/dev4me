import React from "react";
import "./SideBar.scss";
import {menuItems} from "../data/menuItems";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
    this.state = { mouseEnter: [], mouseLeave: [], mouseClick: [] };
    this.menuChange = props.menuChange;
    this.position = props.position;
  }

  handleMouseEnter = (id) => {
    // console.log("mouseEnter", id)
    this.setState({ mouseEnter: [id] });
  };

  handleMouseLeave = (id) => {
    //   console.log("mouseLeave", id)
    this.setState((state, props) => {
      return { mouseEnter: state.mouseEnter.filter((val) => val !== id) };
    });
    this.setState((state, props) => {
      return { mouseLeave: [...state.mouseLeave, id] };
    });
  };

  handleAnimationEnd = (id, type) => {
    if (type === "hover")
      if (this.state.mouseLeave.includes(id))
        this.setState((state, props) => {
          return { mouseLeave: state.mouseLeave.filter((val) => val !== id) };
        });

    if (type === "click")
      if (this.state.mouseClick.includes(id))
        this.setState((state, props) => {
          return { mouseClick: state.mouseClick.filter((val) => val !== id) };
        });
  };

  handleClick = (id) => {
    this.setState((state, props) => {
      return { mouseClick: [id] };
    });
    this.menuChange(id);
  };

  render() {
    this.path = this.props.path;

    let sidebarClass = ""
    if(this.position === "sidebar")
        sidebarClass = "sidebar-sidebar"
    if(this.position === "topbar")
        sidebarClass = "sidebar-topbar"

    return (
      <div className={sidebarClass}>
        {menuItems.filter(item => item.idLvl2 === "").map((item) => {
          let imgClass = "sidebar-icon";
          let divClass = "sidebar-popup";

          if (this.path === item.id) imgClass += " sidebar-icon-active";

          if (this.state.mouseEnter.includes(item.id)) {
            imgClass += " sidebar-icon-hover";
            divClass += " sidebar-popup-hover";
          }
          if (this.state.mouseLeave.includes(item.id)) {
            imgClass += " sidebar-icon-leave";
            divClass += " sidebar-popup-leave";
          }
          if (this.state.mouseClick.includes(item.id))
            imgClass += " sidebar-icon-click";

          return (
            <div
              className="sidebar-icon-container"
              key={item.id}
              onMouseEnter={() => this.handleMouseEnter(item.id)}
              onMouseLeave={() => this.handleMouseLeave(item.id)}
              onClick={() => this.handleClick(item.id)}
            >
              <img
                src={item.img}
                alt={item.alt}
                className={imgClass}
                onAnimationEnd={() => this.handleAnimationEnd(item.id, "click")}
                draggable="false"
              />
              <div
                className={divClass}
                onAnimationEnd={() => this.handleAnimationEnd(item.id, "hover")}
              >
                <span>{item.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SideBar;
