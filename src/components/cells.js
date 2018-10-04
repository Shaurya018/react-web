import React, { Component } from 'react';
import './cells.css';
import Fade from 'react-reveal/Fade';
class Cells extends Component {
    
    render() { 
        return ( 
            <Fade bottom>
            <div>
            <h1 style={{fontFamily:'impact',fontSize:'0px',textAlign:'center'}}>CCA CELLS</h1>
            </div><div>
            <section class="cards">
            
    <div class="card card--oil">
        <div class="card__svg-container">
           
        </div>
        <div class="card__count-container">
            <div class="card__count-text">
                <span class="card__count-text--big"><img style={{width:'90%',height:'90%'}}src="https://www.ccanitd.in/images/CELL/Core.jpg"/></span> 
            </div>
        </div>
        <div class="card__stuff-container">
            <div class="card__stuff-icon">
               
            </div>
            <div class="card__stuff-text">  CORE CELL</div>
        </div>
    </div>
    <div class="card card--oil">
        <div class="card__svg-container">
           
        </div>
        <div class="card__count-container">
            <div class="card__count-text">
                <span class="card__count-text--big"><img style={{width:'90%',height:'90%'}}src="https://www.ccanitd.in/images/CELL/Core.jpg"/></span> 
            </div>
        </div>
        <div class="card__stuff-container">
            <div class="card__stuff-icon">
               
            </div>
            <div class="card__stuff-text">  CORE CELL</div>
        </div>
    </div>
    <div class="card card--oil">
        <div class="card__svg-container">
           
        </div>
        <div class="card__count-container">
            <div class="card__count-text">
                <span class="card__count-text--big"><img style={{width:'90%',height:'90%'}}src="https://www.ccanitd.in/images/CELL/Core.jpg"/></span> 
            </div>
        </div>
        <div class="card__stuff-container">
            <div class="card__stuff-icon">
               
            </div>
            <div class="card__stuff-text">  CORE CELL</div>
        </div>
    </div>
    
</section>
</div>
</Fade>
         );
    }
}
 
export default Cells;