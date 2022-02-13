import React from "react";
import Path from "./Path";
import Home from "./Home";
import Intro from "./Intro";
import "./Body.scss";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.path = props.path;
    this.menuChange = props.menuChange;
  }

  getBodyContent(path) {
    switch (path) {
      case "":
        return (
            <Intro/>
        );
      case "home":
        return <Home/>;
      default:
        return (
          <div className="scrollingBody">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            natus quibusdam consequuntur quo reprehenderit repudiandae tempore
            sunt incidunt porro? Laborum officiis fuga quas sunt fugit eligendi
            possimus vel ratione minima.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repellendus nesciunt minus possimus vitae est culpa mollitia
            voluptatibus perspiciatis, dolor enim! Nulla exercitationem, iusto
            libero porro quo voluptatibus unde voluptas.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            corporis velit tempore porro! Ullam voluptatibus odio deleniti. Nam
            tempora, eveniet est explicabo, itaque, harum illum aliquam
            molestiae expedita nostrum voluptatem!
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            inventore pariatur culpa laudantium quos vero quia facere!
            Cupiditate, at animi. Ipsa officia accusantium temporibus animi
            recusandae architecto facilis tempora dicta.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quas autem, ullam sed asperiores, optio impedit quo inventore ea,
            culpa neque nam perspiciatis. Tenetur incidunt voluptatum quod, unde
            hic harum!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias
            perferendis modi aliquam. Nihil cumque consequatur earum? Vel,
            corrupti? Blanditiis voluptates eos necessitatibus ab nulla mollitia
            at laborum, molestiae dolorum.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            nostrum earum eum tempore beatae. Laboriosam, perferendis quibusdam.
            Accusamus commodi vel velit cupiditate, soluta non expedita
            voluptate sunt nulla, omnis impedit.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            natus quibusdam consequuntur quo reprehenderit repudiandae tempore
            sunt incidunt porro? Laborum officiis fuga quas sunt fugit eligendi
            possimus vel ratione minima.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repellendus nesciunt minus possimus vitae est culpa mollitia
            voluptatibus perspiciatis, dolor enim! Nulla exercitationem, iusto
            libero porro quo voluptatibus unde voluptas.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            corporis velit tempore porro! Ullam voluptatibus odio deleniti. Nam
            tempora, eveniet est explicabo, itaque, harum illum aliquam
            molestiae expedita nostrum voluptatem!
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            inventore pariatur culpa laudantium quos vero quia facere!
            Cupiditate, at animi. Ipsa officia accusantium temporibus animi
            recusandae architecto facilis tempora dicta.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quas autem, ullam sed asperiores, optio impedit quo inventore ea,
            culpa neque nam perspiciatis. Tenetur incidunt voluptatum quod, unde
            hic harum!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias
            perferendis modi aliquam. Nihil cumque consequatur earum? Vel,
            corrupti? Blanditiis voluptates eos necessitatibus ab nulla mollitia
            at laborum, molestiae dolorum.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            nostrum earum eum tempore beatae. Laboriosam, perferendis quibusdam.
            Accusamus commodi vel velit cupiditate, soluta non expedita
            voluptate sunt nulla, omnis impedit.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            natus quibusdam consequuntur quo reprehenderit repudiandae tempore
            sunt incidunt porro? Laborum officiis fuga quas sunt fugit eligendi
            possimus vel ratione minima.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repellendus nesciunt minus possimus vitae est culpa mollitia
            voluptatibus perspiciatis, dolor enim! Nulla exercitationem, iusto
            libero porro quo voluptatibus unde voluptas.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            corporis velit tempore porro! Ullam voluptatibus odio deleniti. Nam
            tempora, eveniet est explicabo, itaque, harum illum aliquam
            molestiae expedita nostrum voluptatem!
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            inventore pariatur culpa laudantium quos vero quia facere!
            Cupiditate, at animi. Ipsa officia accusantium temporibus animi
            recusandae architecto facilis tempora dicta.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quas autem, ullam sed asperiores, optio impedit quo inventore ea,
            culpa neque nam perspiciatis. Tenetur incidunt voluptatum quod, unde
            hic harum!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil alias
            perferendis modi aliquam. Nihil cumque consequatur earum? Vel,
            corrupti? Blanditiis voluptates eos necessitatibus ab nulla mollitia
            at laborum, molestiae dolorum.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            nostrum earum eum tempore beatae. Laboriosam, perferendis quibusdam.
            Accusamus commodi vel velit cupiditate, soluta non expedita
            voluptate sunt nulla, omnis impedit.
            <br />
          </div>
        );
    }
  }

  render() {
    this.path = this.props.path;
    return (
      <div className="body">
        <Path position="body" path={this.path} menuChange={this.menuChange} />
        {this.getBodyContent(this.path)}
      </div>
    );
  }
}

export default Body;
