import React from 'react'
import "./About_Hero_1.css"
import About_Hero1 from "../Assest/about_hero_1.png"
import About_Hero2 from "../Assest/about_hero2.png"


const About_Hero_1 = () => {
  return (
    <>   
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
    <div className='container'>
        
        <div className='section2'>
            <h1>Who are we ?
            </h1>
            <p>
            Master Maind is a world leader in providing coding skills that enable anyone to transition to a software development career in less than a  year. The need for software engineers is growing quickly as digitisation picks up speed, and hundreds of thousands of new positions become available each month. Our online courses provide students with a clear <br/>route into these fields while emphasizing the competencies needed in an AI-driven future.
            </p>
        


              
        </div>
        <img  className= 'Hero1' src={About_Hero2} alt="About_Hero2"/>

    </div>
    </>
    
  )
}

export default About_Hero_1