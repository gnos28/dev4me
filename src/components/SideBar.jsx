import React from "react";
import "./SideBar.scss";
import Home from "../img/home.svg";
import Mail from "../img/mail.svg";
import People from "../img/people.svg";
import Wheel from "../img/wheel.svg";
import Window from "../img/window.svg";

const menuItem = [
    {
        id:"home",
        img:Home,
        alt:"home",
        text:"Accueil",
    },
    {
        id:"real",
        img:Window,
        alt:"realisations",
        text:"Realisations",
    },
    {
        id:"tech",
        img:Wheel,
        alt:"technologies",
        text:"Technologies",
    },
    {
        id:"who",
        img:People,
        alt:"qui sommes nous ?",
        text:"L'equipe",
    },
    {
        id:"mail",
        img:Mail,
        alt:"contact",
        text:"Contact",
    },
]

class SideBar extends React.Component {
    constructor(props)
    {
        super(props)
        this.path = "home"
    }
    

  render() {
    return (
      <div className="sidebar">
          {menuItem.map(item => {
              let imgClass = "sidebar-icon"
              if(this.path === item.id)
                imgClass += " sidebar-icon-active"

              return <div className="sidebar-icon-container" key={item.id}>
              <div className="sidebar-popup">
                <img src={item.img} alt={item.alt} className={imgClass} />
                <span>{item.text}</span>
              </div>
            </div>
          })}
      </div>
    );
  }
}

export default SideBar;
