import React from 'react'
import "./BodySection.css"
import { Link } from "react-router-dom"

const BodySection = () => {
  return (
    <div className='conteiner'>
        <div className='b_btn'>
          <center><a><Link to="/About">WHY CHOSE US</Link></a></center>  
        </div>
        <div className='bodytext' >
            <h2>
           <center>Dive into online courses on  <br/>diverse subjects</center>   
            </h2>
            
        </div>
    </div>
  )
}

export default BodySection