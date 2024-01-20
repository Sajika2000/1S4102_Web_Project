import React from 'react'
import "./About_Hero_1.css"
import About_Hero1 from "../Assest/about_hero_1.png"

const About_Hero_1 = () => {
  return (
    <div className='container'>
        <img  className= 'Hero1' src={About_Hero1} alt="About_Hero1"/>
        <div className='section'>
            <h1>Making Career 
            <br/>Change <br/>
             A Reality
            </h1>
            <p>
            “Elevate your learning experience with us! Explore diverse courses <br/> tailored for success on our user-friendly online platform. Join today!"
            </p>
        


              
        </div>
    </div>
  )
}

export default About_Hero_1