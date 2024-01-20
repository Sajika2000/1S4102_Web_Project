import React from 'react';
import "./Footer.css";
import Logo from "../Assest/logo.png";
import { FaFacebook ,FaLinkedin,FaInstagram,FaSearchLocation,FaMailBulk,FaPhone, FaLocationArrow}from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='footerSection'>
        <div className='links'>
            <div className='sublink'>
                <img src={Logo} alt='Logo'/>
                <p>Learn new skills with an industrial curriculum. Take certifications as well as job opportunities in various companies.</p>

            </div>
            <div className='sublink'>
                <h4>User Links</h4>
                <div className='sub_text'>
                    <ul>
                    <li><Link className='sub_link' to="/">Home</Link></li>
                    <li><Link  className='sub_link'to="/About">About</Link></li>
                    <li><Link  className='sub_link'to="/Contact">Contact</Link></li>
                    <li><Link  className='sub_link' to="/Courses">Courses</Link></li> 
                    </ul>
                  
                </div>

            </div>
            <div className='sublink'>
            <h4>Services</h4>
                <div className='sub_text'>
                <ul>
                    <li><a>Class</a></li>
                    <li><a>Challenge</a></li>
                    <li><a>Skillpath</a></li>
                    <li><a>Webinar</a></li> 
                    </ul>
                    
                </div>
             </div>
            <div className='sublink'>
            <h4>Contact by  using</h4>
              <div className='Icons'>
              <FaPhone size={20} style={{color:"fff",marginRight:"1rem"}}/>
                <p>011-345-56-4567</p>
              </div> 
              <div className='Icons'>
              <FaMailBulk size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                <p>masterminded@gmail.com</p>
              </div>  
              <div className='Icons'>
              <FaLocationArrow size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                <p>No. 23, Dehiwala Road, MountLavinia</p>
                
              </div>   

            </div>
        </div>
        <div className='input_feild'>
            <div className='input_text'>
                <p>Copyright  2023 brand name</p>


            </div>
            <div className='input_icon'>
            <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaInstagram size={20} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem"}}/>

            </div>
            

        </div>

    </div>
  )
}

export default Footer