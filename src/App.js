import { useEffect, useState } from "react";
import {FaWindowClose,FaBars} from 'react-icons/fa'
import "./app.css"
import { Link, useLocation } from "react-router-dom";

function App() {
  const [isActive,setIsActive] = useState(false)

  const moveBox = () => {
    setIsActive(!isActive)
  }
  return (
    <div className="App">
      <nav>
        <Link to="/" className="logo-div">
          <div className="logo"></div>
          <h3>Compete to Compute</h3>
        </Link>
        <Link className="link" to="/" >HOME</Link>
        <Link className="link" to="/about">ABOUT</Link>
        <Link className="link" to="/event">EVENT</Link>
        <Link className="link" to="/team">TEAM</Link>
        <Link className="link" to="/contact">CONTACT US</Link>
        <FaBars className="toggleBtn" onClick={moveBox}/>
      </nav>
      <div className={isActive?"active box":"box"}>
        <div className="closeSlide"><FaWindowClose onClick={()=>{setIsActive(!isActive)}}/></div>
        <Link className="link" onClick={()=>setIsActive(false)} to="/">HOME</Link>
        <Link className="link" onClick={()=>setIsActive(false)} to="/about">ABOUT</Link>
        <Link className="link" onClick={()=>setIsActive(false)} to="/event">EVENT</Link>
        <Link className="link" onClick={()=>setIsActive(false)} to="/team">TEAM</Link>
        <Link className="link" onClick={()=>setIsActive(false)} to="/contact">CONTACT US</Link>
      </div>
    </div>
  );
}

export default App;
