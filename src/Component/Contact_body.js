import React from 'react'
import "./Contact_body.css"
import home_I from "../Assest/home.png"
import phone_I from "../Assest/Phone.png"
import email_I from "../Assest/mail.png"
import facebook from "../Assest/facebook.png"
import instragram from "../Assest/instagram.png"
import linkden from "../Assest/linkedin.png"

import { FaFacebook ,FaLinkedin,FaInstagram}from "react-icons/fa"

const Contact_body = () => {
  return (
    <div className='container'>
      <div className='contact_infor'>
        <div className='con_infor'>
        <h2>GET IN TOUCH</h2>
       <p>Locking for help film from and start new adventure </p>
        </div>
       
       <div className='contact_form'>
           <div className='section'>
            <h4>Head Quatre</h4>
            <div className='subsection'>
               <img  src={home_I}/>
               <p>
                  sample text
               </p>
            </div>
           </div>
           <div className='section'>
            <h4>Phone</h4>
            <div className='subsection'>
               <img  src={phone_I}/>
               <p>
                  sample text
               </p>
            </div>
           </div>
           <div className='section'>
            <h4>Support</h4>
            <div className='subsection'>
               <img  src={email_I}/>
               <p>
                  sample text
               </p>
            </div>
           </div>
           <div className='section'>
            <h4>Follow Us</h4>
            <div className='pro_links'>
              <div className='box'>
              <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
              </div>
            <div className='box'>
            <FaInstagram size={20} style={{color:"#fff",marginRight:"1rem"}}/>
            </div>
            <div className='box'>
            <FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem"}}/> 
            </div>
            
            </div>
           </div>
      </div>
      </div>
      <div class="form">
        <div className='form_head'>
          <h2>Lets Connect</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>

        </div>
        <div className='inputs'>
          <div className='row1'>
            <input type='text' placeholder='Your name'/> 
            <input type='email' placeholder='Your email'/> 

          </div>
          <div className='row2'> 
             <input type='text' placeholder='subject'/> 
          </div>
          <div className='row3'>
              <textarea name="" cols="30" rows="8" placeholder="How can we help"></textarea>
          </div>

        </div>
        <div className='btns'>
              <button>Send Massage</button>
        </div>



		   </div>
      
        
    </div>
  )
}

export default Contact_body