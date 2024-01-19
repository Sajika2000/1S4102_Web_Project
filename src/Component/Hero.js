import React from 'react'
import "./Hero.css"
import HeroIcon from "../Assest/Home_img1.png"

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
            <a className='btn' href=''>Get Strated</a>


              
        </div>
        <img className='heroimg' src={HeroIcon} alt='HeroIcon'/>

    </div>
  )
}

export default Hero