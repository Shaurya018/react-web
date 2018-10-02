import React, { Component } from 'react';
import './grid.css';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';



class Grid extends React.Component {
 
    render() { 
        return ( 
         
<div>
  <div>
  <Zoom bottom>
 <p style={{fontSize:'80px',fontFamily:'impact',fontWeight:'bold',textAlign:"center",color:'black'}}>CCA CELLS</p></Zoom>
  </div>
  
 

<div className="container">
  
 
  <section className="sec01"><a href="#"><p  style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold'}}>CORE CELL</p> </a> </section>

  
  <section className="sec02"><p  style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold'}}>ROBO CELL</p></section>
  
  <section className="sec03"><p  style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold'}}>R&D  CELL</p></section>
  <Fade bottom>
  <section className="sec04"><p style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold'}}>E CELL</p></section>
  </Fade>
 
  <section className="sec05"><p  style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold'}}>WDCT</p></section>
 </div>
  </div>


            
         );
    }
}
 
export default Grid;