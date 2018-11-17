import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Clarifai from 'clarifai';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import './App.css';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
  apiKey: '9ce508f70eff41a6a958a2ab19885ff5'
 });

const particlesOptions = {
    particles: {
      number:{
        value: 25,
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
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  
  displaceFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{
    //console.log('click');
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displaceFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
      // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);

  }
  render() {
    return (
        <div className="App">
          <Particles className='particles' params={particlesOptions}/>
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} />
          <FaceRecognition box={this.state.box} image_detected={this.state.imageUrl} />
        </div>
    );
  }
}

export default App;
