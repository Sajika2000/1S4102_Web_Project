import React from 'react'
import "./Hero.css"
import HeroIcon from "../Assest/Home_img1.png"
import { Link } from "react-router-dom"

const Hero = () => {

 
  return (
    <div className='container'>
        <div className='section1'>
            <h1>Access  The World’s <br/>
               Best Learning Course<br/>
                With MasterMindEd
            </h1>
            <p>
            Dicover a world of knowledge with our cutting-edge online course <br/>application. Empower yourself to succeed in your career, passion, and <br/>personal growth journey.
            </p>
           <div className='btn'>
           <Link  className='btn_1' to="/SignIn">Get Strated</Link>
           </div>
           
        


              
        </div>
        <img className='heroimg' src={HeroIcon} alt='HeroIcon'/>

    </div>
  )
}

export default Hero