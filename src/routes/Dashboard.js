import React from 'react'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import "../app.css"
import Particle from './Particle'
import Preloader from './Preloader';
import "./preloader.css";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
      <Particle/>
        <div className="hero">
          <div>
            <h1 className='hero-h1'>Compete to Compute Club</h1>
            <p className='hero-p'>One of the Leading Technical Club of SVCE <br/> Join us to be a part of our Family</p>
            <button class="Exbtn">
              <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
               </svg>
               <Link to="/about" style={{color:"inherit",textDecoration:"none"}}><span class="text">Explore</span></Link>
            
          </button>
            {/* <button className='hero-btn'><Link to="/about" style={{color:"inherit",textDecoration:"none"}}>Explore</Link></button> */}
            {/* <div><button className='hero-btn'><Link to="https://forms.gle/qZQCu5UKFsGod7XE8" style={{color:"inherit",textDecoration:"none"}}>Register</Link></button></div> */}

          </div>
        {/* <img className="heroimg" src={heroimg} alt="Hero"></img> */}
      </div>
      </div>
       )}
    </div>
  );
}

export default Dashboard