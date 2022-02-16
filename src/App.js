import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.scss";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      path: "",
      pathLevel2 : "",
      homeAnimationPlayedOnce: false,
    };

    document.title = "DEV4.me";
    document.body.classList.add("fill-window");
    document.getElementById("root").classList.add("fill-window");
  }

  handleHomeAnimationEnd = (e, value = true) => {
    this.setState({ homeAnimationPlayedOnce: value });
  };

  menuChange = (id, lvl2="", timeout = 0) => {
    console.log("menuChange", id, lvl2)
    this.setState({ path: id, pathLevel2: lvl2 })
  };

  render() {
    return (
      <div className="p-0 main-container">
        <TopBar
          menuChange={this.menuChange}
          path={this.state.path}
          pathLevel2={this.state.pathLevel2}
          position="topbar"
        />
        <div className="SidebarBodyFooter">
          <SideBar
            menuChange={this.menuChange}
            path={this.state.path}
            pathLevel2={this.state.pathLevel2}
            position="sidebar"
          />
          <div className="bodyAndFooter">
            <Body
              path={this.state.path}
              pathLevel2={this.state.pathLevel2}
              menuChange={this.menuChange}
              handleHomeAnimationEnd={this.handleHomeAnimationEnd}
              homeAnimationPlayedOnce={this.state.homeAnimationPlayedOnce}
            />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
