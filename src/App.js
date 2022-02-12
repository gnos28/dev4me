import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.scss";
import React from "react";

class App extends React.Component {
  
  constructor(props)
  {
    super(props)

    this.state = {
      path:""
    }

    document.title = "DEV4.me";
    document.body.classList.add("fill-window"); 
    document.getElementById("root").classList.add("fill-window");
  }

  menuChange = (id) => {
      this.setState({path:id})
  }

  render()
  {
    return (
      <div className="p-0 main-container">
        <TopBar menuChange={this.menuChange} path={this.state.path} position="topbar"/>
        <div className="SidebarBodyFooter">
        
            <SideBar menuChange={this.menuChange} path={this.state.path} position="sidebar"/>
          <div className="bodyAndFooter bg-danger">
            <Body path={this.state.path} menuChange={this.menuChange}/>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
  

  
}

export default App;
