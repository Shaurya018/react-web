import React, { Component } from 'react';
import './wdct.css';
import Fade from 'react-reveal/Fade';
class Wdct extends Component {
    
    render() { 
        return ( 
            
            
                <main>
  <header>
    <a class="banner-image"></a>
    <nav class="primary-menu">
      <ul>
        <li><a href="/our-info">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="">Members</a></li>
        
      </ul>
    </nav>
  </header>
  <section class="home-upper">

    <div class="title-content">
      <h1 style={{ fontSize:'40px'}}>WEB DESIGN AND CREATIVE TEAM</h1>
      <hr/>
      <p>WE BELIEVE IN DESIGN.DESIGN THAT IS SIMPLE MODERN AND EYE-CATCHING.WE BELIEVE IN OUR DESIGN. 
A congregation of enthusiastic techno-crats, we manage the technical aspects of the club, to keep it up and running in the cyber front. From designing websites for fests to organising workshops for amateurs, we nurture the creative spurt in the club. </p>
      <p><a href="#">More About Us</a></p>
    </div>
    <div class="cta_video_container">
      <video class="cta_video" src="http://stevenlutzstudios.com/wp-content/themes/steven-lutz-studios/videos/typing.mp4" autoplay loop/>
    </div>

  </section>
  <section class="learn-more">
    <h3>Welcome To The Technical Cell Of The Club</h3>
    <a class="our-stats">Aim</a>
  </section>
  <section class="the-stats">
    <div class="stat-container">
      <div class="stat stat-1">
        <div>
          <span class="number">1234</span>
          <br/>
          <span class="text">Successful<br/>Projects</span>
        </div>
      </div>
      <div class="stat stat-2">
        <div>
          <span class="number">WDCT</span>
          <br/>
          <span class="text">UI/UX <br/>Workshops</span>
        </div>
      </div>
      <div class="stat stat-3">
        <div>
          <span class="number">1234</span>
          <br/>
          <span class="text">Cups of<br/>Coffee</span>
        </div>
      </div>
      <div class="stat stat-4">
        <div>
          <span class="number">123</span>
          <br/>
          <span class="text">Locations<br/>Wordlwide</span>
        </div>
      </div>
    </div>
  </section>

  <section class="more-impressive-info">
    <h2>Web Development Team</h2>
    <hr/>
    <h4>This team is responsible for the development, design of the various websites associated with CCA, the Aarohan official website and various online publication and propaganda of the events of the club. It also devises interactive online events, which see about 3000 online participants, for Aarohan, the Annual Techno- Management Fest of CCA.</h4>
    
  </section>
  <section class="more-impressive-info">
    <h2>Web Design Team</h2>
    <hr/>
    <h4>This creative team is entrusted with the development and designing of the various offline propaganda means for CCA as well as for Aarohan-The Annual Techno Management Fest of NIT Durgapur. It designs the sponsorship and talk show brochures for Aarohan, flyers, pamphlets, event posters and flexes for Aarohan.</h4>
    
  </section>
  <section class="our-info">
  <h2 style={{fontSize:'25px',fontFamily:'san-seriff'}}>MEET THE TEAM</h2>
    <ul>
      <li>
        <img src="https://www.ccanitd.in/images/Shivam.jpg"/>
        <h3>Shivam Kumar Jha</h3>
        <span>Convener And Head</span>
      </li>
      <li>
        <img src="https://www.ccanitd.in/images/Shivam.jpg"/>
        <h3>Shivam Kumar Jha</h3>
        <span>Convener And Head</span>
      </li>
      <li>
        <img src="https://www.ccanitd.in/images/Shivam.jpg"/>
        <h3>Shivam Kumar Jha</h3>
        <span>Convener And Head</span>
      </li>
    </ul>
  </section>
  <footer>

    <p>Copyright 2015</p>

  </footer>
</main>
            
         );
    }
}
 
export default Wdct;