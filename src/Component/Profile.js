import React from 'react'
import "./profile.css"
import { FaFacebook ,FaLinkedin,FaInstagram} from "react-icons/fa";
import exp1 from "../Assest/exp1.jpg";
import exp2 from "../Assest/exp3.jpg";
import exp3 from "../Assest/exp2.jpg";
import exp4 from "../Assest/exp4.jpg";



const Profile = () => {
  return (
    <div className='profiles'>
        <div className='heder'>
            <h1>Community Express</h1>
            <p>“Elevate your learning experience with us! Explore diverse courses tailored for success on our user-friendly online platform. Join today!"</p>
        </div>
        <div className='profile_section'>
            <div class="profile">
				<img src={exp1} alt='exp1'/>
				<h4>Mr. Jackson Lewis</h4>
				<p>Web developer</p>
				<div class="pro-links">
                    <div className='icon'>
                    <FaFacebook className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>
                    <div className='icon'>
                    <FaInstagram className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>
                    <div className='icon'>
                    <FaLinkedin className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>  
				</div>

			</div>
            <div class="profile">
				<img src={exp2} alt='exp2'/>
				<h4>Mrs. Lvy Ember</h4>
				<p>Data Analytics</p>
				<div class="pro-links">
                    <div className='icon'>
                    <FaFacebook className='i'  size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>
                    <div className='icon'>
                    <FaInstagram  className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>
                    <div className='icon'>
                    <FaLinkedin  className='i'  size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>  
				</div>

			</div>
            <div class="profile">
				<img src={exp3} alt='exp3'/>
				<h4>Mr. Davies Smith</h4>
				<p>UI/UX Engineer</p>
				<div class="pro-links">
                    <div className='icon'>
                    <FaFacebook className='i'  size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>
                    <div className='icon'>
                    <FaInstagram  className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>
                    <div className='icon'>
                    <FaLinkedin className='i'  size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>  
				</div>

			</div>
            <div class="profile">
				<img src={exp4} alt='exp2'/>
				<h4>Mr. Harryson Baxston</h4>
				<p> Senior Professor</p>
				<div class="pro-links">
                    <div className='icon'>
                    <FaFacebook  className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>
                    <div className='icon'>
                    <FaInstagram  className='i' size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>
                    <div className='icon'>
                    <FaLinkedin className='i'  size={20} style={{color:"#05375B",marginRight:"1rem"}}/> 
                    </div>  
				</div>

			</div>

        </div>
    </div>
  )
}

export default Profile