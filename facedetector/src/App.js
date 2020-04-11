import React, { Component } from "react";
import Particles from 'react-particles-js';
import Navigation from "./component/Navigation";
import Logo from "./component/Logo/Logo";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import Rank from "./component/Rank/Rank";
import "./App.css";

const particalesOptions = {
  Particles: {
    number: {
      value: {
        enable: true,
        vlaue_area: 800,
      },
    },
  },
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  onInputChange = (event) => {
    console.log(event)
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particalesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}/>
      </div>
    );
  }
}

export default App;
