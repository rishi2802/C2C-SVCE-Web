import React from 'react'
import "./footer.css"
import { Link, useLocation } from 'react-router-dom'
import {FiMail} from 'react-icons/fi'
import {FaLinkedinIn,FaInstagram} from "react-icons/fa"


function Footer() {
  const {pathname} = useLocation()
  return (
    pathname !== "/"?
    <div className='footer'>
        <Link to="/" className="about">
            <div className="logo"></div>
            <p>Compete To Compute <br/>One of the Leading Technical Club of SVCE <br/> Join us to be a part of our Family</p>
        </Link>
        <div className='sec-cont'>
            <div className="quick">
                <h3>Quick Links</h3>
                <Link className="link" to="/dashboard">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/event">Event</Link>
                <Link className="link" to="/team">Team</Link>
                <Link className="link" to="/contact">Contact Us</Link>
            </div>
            <div className="find-us">
                <FaLinkedinIn size={40} style={{cursor:"pointer"}} onClick={()=>{window.open("https://www.linkedin.com/company/82836972/","blank")}}/>
                <FaInstagram size={40} style={{cursor:"pointer"}} onClick={()=>{window.open("https://www.instagram.com/c2c_svce/","blank")}}/>
                <a href='mailto:c2c@svce.ac.in' style={{color:"white"}}><FiMail size={40} style={{cursor:"pointer"}}/></a>
            </div>
        </div>
    </div>:<div style={{display:"none"}}></div>
  )
}

export default Footer