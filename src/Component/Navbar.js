import "./Navbar.css"

import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../Assest/logo.png"

const Navbar = () => {
  return (
    <div className="header">
        <Link to={"/"}>
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="nav_main_link">
            <ul className="nav_main">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Courses">Courses</Link>
                </li>
                <div className="sign">
                
                <li>
                    <Link to="/SignIn">Sign In</Link>
                </li>
             
                    
                    <li>
                    
                    <Link className="btn" to="/Signup">Sign Up</Link>
                    </li>
                </div>
        
               
                

          
                

            </ul>
            </div>           
        </Link>

    </div>
  )
}

export default Navbar