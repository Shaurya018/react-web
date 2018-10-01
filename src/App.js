import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/grid.js';
import sam from './components/images/sam.jpg';
import Fade from 'react-reveal/Fade';
import ParallaxImage from 'react-image-parallax2';
import Contact from './components/contact.js';
import Con from './components/cnt.js';
import Icons from './components/icons.js';
class App extends Component {
  

  render() {
   
    return (<div>
      <img src="https://www.ccanitd.in/images/bs-img-1.jpg" style={{width:'100%'}}/>
      <img src="https://www.ccanitd.in/images/bs-img-1.jpg" style={{width:'100%'}}/>
      <Grid/>
      <Fade>
      <div style={{paddingTop:'10%'}}>
      
       <Contact/>
       
   
      </div>
      </Fade>
      <div>  <Icons/></div>
      <div><Con/></div>
   </div>
    );
  }
}

export default App;
