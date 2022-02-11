import React from "react";
import "./SideBar.scss";
import Home from "../img/home.svg";
import Mail from "../img/mail.svg";
import People from "../img/people.svg";
import Wheel from "../img/wheel.svg";
import Window from "../img/window.svg";

const menuItem = [
  {
    id: "home",
    img: Home,
    alt: "home",
    text: "Accueil",
  },
  {
    id: "real",
    img: Window,
    alt: "realisations",
    text: "Realisations",
  },
  {
    id: "tech",
    img: Wheel,
    alt: "technologies",
    text: "Technologies",
  },
  {
    id: "who",
    img: People,
    alt: "qui sommes nous ?",
    text: "L'equipe",
  },
  {
    id: "mail",
    img: Mail,
    alt: "contact",
    text: "Contact",
  },
];

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.path = "home";
    this.state = { mouseEnter: [], mouseLeave: [] };
  }

  handleMouseEnter = (id) => {
    // console.log("mouseEnter", id)
    this.setState({ mouseEnter: [id]});
    console.log(this.state.mouseEnter)
  };

  handleMouseLeave = (id) => {
    //   console.log("mouseLeave", id)
    this.setState((state, props) => {
        return { mouseEnter: state.mouseEnter.filter(val => val !== id) }
    })
    this.setState((state, props) => {
        return { mouseLeave: [...state.mouseLeave, id] }
    })
  };

  handleAnimationEnd = (id) => {
      if(this.state.mouseLeave.includes(id))
      this.setState((state, props) => {
        return { mouseLeave: state.mouseLeave.filter(val => val !== id) }
      })
  }

  render() {
    //   console.log("render", this.state.mouseEnter)
    return (
      <div className="sidebar">
        {menuItem.map((item) => {
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

          return (
            <div
              className="sidebar-icon-container"
              key={item.id}
              onMouseEnter={() => this.handleMouseEnter(item.id)}
              onMouseLeave={() => this.handleMouseLeave(item.id)}
            >
              <img src={item.img} alt={item.alt} className={imgClass} />
              <div className={divClass}
              onAnimationEnd={() => this.handleAnimationEnd(item.id)}>
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
