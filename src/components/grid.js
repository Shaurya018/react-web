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
<div className="wrapper">
<div style={{width:'100%',marginTop:'200px',display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'}}>
 
  <section className="sec01"><a href="#"><p  style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold',marginLeft:'15%'}}>CORE CELL</p> </a> </section>

  <Fade bottom>
  <section className="sec02"><p  style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold',marginLeft:'15%'}}>ROBO CELL</p></section>
  </Fade>
  <section className="sec03"><p  style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold',marginLeft:'15%'}}>R&D  CELL</p></section>
  <Fade bottom>
  <section className="sec04"><p style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold',marginLeft:'15%'}}>E CELL</p></section>
  </Fade>
 
  <section className="sec05"><p  style={{fontSize:'30px',fontFamily:'impact',fontWeight:'bold',marginLeft:'15%'}}>WDCT</p></section>
 
  </div>
</div>
</div>
            
         );
    }
}
 
export default Grid;