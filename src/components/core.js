import React, { Component } from 'react';
import'./core.css';
import $ from 'jquery';
class Core extends Component {
    componentDidMount()
    {
        function openNav() {
            document.getElementById("myNav").style.width = "100%";
          }
          
          /* Close when someone clicks on the "x" symbol inside the overlay */
          function closeNav() {
            document.getElementById("myNav").style.width = "0%";
          }
          
          $(function() {
            // This will select everything with the class smoothScroll
            // This should prevent problems with carousel, scrollspy, etc...
            $('.smoothScroll').click(function() {
              if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top
                  }, 5000); // The number here represents the speed of the scroll in milliseconds
                  return false;
                }
              }
            });
          });
    }
    
    render() { 
        return ( 
            <div className="container" style={{width:'100%'}}>
               


<div className="myNav" class="overlay">

  
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>


  <div class="overlay-content">
    <a class="smoothScroll" href="#welcome" onclick="closeNav()">Home</a>
    <a class="smoothScroll" href="#about" onclick="closeNav()">About</a>
    <a class="smoothScroll" href="#portfolio" onclick="closeNav()">Portfolio</a>
  </div>

</div>

<span className="openmenu" onclick="openNav()"><b>Menu</b></span>


<center>
  
  <div className="welcome">
    <h1>CORE CELL</h1>
    <h3><b>Welcome To The Core Cell Of The Club</b></h3>
    <a class="smoothScroll" href="#about"><img className="press" src="http://gowingwoman.com/img/menu_down_arrow.png" style={{ width:'100%'}}/></a>
  </div>
</center>


<div className="about">
  <h1>AIM </h1>
  <center>
    <div className="self">
      <img class="img-responsive" src="https://www.ccanitd.in/images/bs-img-1.jpg"/>
    </div>
  </center>
  
  <p style={{
    fontSize:"30px"
  }}>Hi! I’m Emerald Teve, a.k.a. Polianthes, and web development is my passion. I help people build websites they love, and I absolutely adore making people smile. When I’m not programming, you can find me drawing, or drinking a nice cup
    of tea.
    If you'd like, scroll down to see some examples of my work!Want to work together? I’d love to hear from you!</p>
  
 
</div>


<div className="portfolio">
  <h1>MEET OUR MEMBERS</h1>
    
  <center>
    <div className="port" class="container">
      <table>
        
          <tr>
            <a target="_blank" href="https://s.codepen.io/Polianthes/debug/xVQoRx#"><img class="img-responsive thumbnail" style={{ width:'100%'}} src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?crop=entropy&fit=crop&fm=jpg&h=900&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1300"/></a>
          </tr>
          
         
      </table>
    </div>
  </center>
  
</div>
<div>

</div>


            </div>
         );
    }
}
 
export default Core;