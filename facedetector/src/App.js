import React, {Component} from "react";
import Particles from 'react-particles-js'
import Navigation from "./component/Navigation";
import Logo from "./component/Logo/Logo";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import Rank from "./component/Rank/Rank";
import './App.css';

const particalesOptions = {
  Particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particalesOptions}
        
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
