import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import Rank from './components/rank/Rank';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number:{
        value: 30,
        density:{
          enable: true,
          value_area: 1000
        }},
      move:{
        speed: 30
      }
      ,
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
          <Particles className='particles' params={particlesOptions}/>
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm />
        {/*<Logo />
        <FaceRecognition />
        */}
        </div>
    );
  }
}

export default App;
