import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import './contact.css';




class Contact extends Component {
    
    render() { 
        return ( 
        <div>
            <div class="contact_us">
    <div class="contact_us_fon">
    
      
      <div class="contact_us_big_text">
           <span class="contact_us_big_text">contact <span class="red_text">us</span></span>
      
      
      <div class="contact_us_small_text adress">Centre For Cognitive Activities (CCA), National Institute Of Technology, Durgapur, India</div>
      <div class="contact_us_small_text phone_number"> SHIVAM KUMAR JHA
(Convener & Head)

+91-89449-21428
</div>
<div class="contact_us_small_text phone_number"> 
MAYANK MEHTA
(General Secretary)

+91-90835-04362
</div>
<div class="contact_us_small_text phone_number"> 
AKHIL KOMMINENI
(Treasurer)

+91-94930-56384</div>
      <div class="contact_us_small_text mail"> your.email@info.com</div>    
    </div>
    
    
      
       
      
    </div>
    
  </div>
  
      </div>
  
  
        
         );
    }
}
 
export default Contact;