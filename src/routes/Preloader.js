import React from 'react';
import './preloader.css'; 
import svgloader from '../assets/c2clogo-removebg.svg';

class Preloader extends React.Component {
  componentDidMount() {
    // Hide scroll when preloader is displayed
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Restore scroll when preloader is removed
    document.body.style.overflow = 'auto';
  }
  render() {
    return (
      <div className='preloaderc'>
        <img className='svgimg' src= {svgloader}  alt="Logo" />
        <div className="loaded">
          <div className="letters-container">
            <span className="letter">C</span>
            <span className="letter">o</span>
            <span className="letter">m</span>
            <span className="letter">p</span>
            <span className="letter">e</span>
            <span className="letter">t</span>
            <span className="letter">e</span>
            <span className="letter"> </span>
            <span className="letter">t</span>
            <span className="letter">o</span>
            <span className="letter"> </span>
            <span className="letter">C</span>
            <span className="letter">o</span>
            <span className="letter">m</span>
            <span className="letter">p</span>
            <span className="letter">u</span>
            <span className="letter">t</span>
            <span className="letter">e</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
