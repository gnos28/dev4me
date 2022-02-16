import React from "react";
import Path from "./Path";
import Home from "./Home";
import Intro from "./Intro";
import "./Body.scss";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
    this.pathLevel2 = props.pathLevel2;
    this.handleHomeAnimationEnd = props.handleHomeAnimationEnd;
    this.homeAnimationPlayedOnce = props.homeAnimationPlayedOnce;
    this.menuChange = props.menuChange;
    this.state = {
      bodyBlurAnimationEnd: false,
    };
  }

  getBodyContent(path) {
    switch (path) {
      case "":
        return (
          <React.Fragment>
            <div className="bodyBlur" key={path}></div>
            <Intro
              menuChange={this.menuChange}
              handleHomeAnimationEnd={this.handleHomeAnimationEnd}
              homeAnimationPlayedOnce={this.props.homeAnimationPlayedOnce}
            />
          </React.Fragment>
        );
      case "home":
        return (
          <React.Fragment>
            <div className="bodyBlur" key={path}></div>
            <Home
              menuChange={this.menuChange}
              path={this.path}
              pathLevel2={this.pathLevel2}
              handleHomeAnimationEnd={this.handleHomeAnimationEnd}
              homeAnimationPlayedOnce={this.props.homeAnimationPlayedOnce}
            />
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <div className="bodyBlur" key={path}></div>
            <div className="scrollingBody">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore natus quibusdam consequuntur quo reprehenderit
              repudiandae tempore sunt incidunt porro? Laborum officiis fuga
              quas sunt fugit eligendi possimus vel ratione minima.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              repellendus nesciunt minus possimus vitae est culpa mollitia
              voluptatibus perspiciatis, dolor enim! Nulla exercitationem, iusto
              libero porro quo voluptatibus unde voluptas.
              <br />
            </div>
          </React.Fragment>
        );
    }
  }

  render() {
    this.path = this.props.path;
    this.pathLevel2 = this.props.pathLevel2;
    return (
      <div className="body">
        <Path
          position="body"
          path={this.path}
          pathLevel2={this.pathLevel2}
          menuChange={this.menuChange}
        />
        {this.getBodyContent(this.path)}
      </div>
    );
  }
}

export default Body;
