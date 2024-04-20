import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './Home';
import "./about.css";
import members from "../assets/gallery/gal1.jpg";
import pic1 from "../assets/vinothiyalakshmi_p.png";
import pic2 from "../assets/selvamani_p.png";
import bb from "../assets/sponsers/bb.png";
import bs from "../assets/sponsers/bs.jpg";
import clus from "../assets/sponsers/clustrex.png";
import grad from "../assets/sponsers/Gradsquare-Logo.png";
import mag from "../assets/sponsers/magoosh.png";
import santa from "../assets/sponsers/output-onlinejpgtools.jpg";
import sethu from "../assets/sponsers/sethu logo 2.png";
import wi from "../assets/sponsers/wi.jpg";
import {FiExternalLink} from "react-icons/fi";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true, 
  autoplaySpeed: 5000, 
};


function About() {
  const f = [
    {
      name: "Dr. P. Vinothiyalakshmi",
      image: pic1,
      link: "https://www.svce.ac.in/profile-info/?id=5103"
    },
    {
      name: "Mr. P. Selvamani",
      image: pic2,
      link: "https://www.svce.ac.in/profile-info/?id=5165"
    }
  ];

  const carouselData = [
    { title: 'Magoosh', image: mag, link: 'https://magoosh.com/' },
    { title: 'GradSquare', image: grad, link: 'https://gradsqr.com/' },
    
    { title: 'Walk International', image: wi, link: 'https://walkinternational.com/' },
    { title: 'Clustrex', image: clus, link: 'https://www.clustrex.com/' },   
    { title: 'Blush n Beauty', image: bb, link: 'https://www.blushnbeautycare.com/' },
    { title: 'BlackSheep', image: bs, link: 'https://blacksheepindia.com/' },
    { title: 'Santa Gifts', image: santa, link: 'https://www.santagifts.in/' },
    { title: 'Sethu Bhaskara Higher Secondary School', image: sethu, link: 'https://www.sethubhaskara.com/' },
    ];


  return (
    <div className='aboutPage'>
      <div className="history">
        <h1>About Us</h1>
        <p>The C2C Club at Sri Venkateswara College of Engineering aims to cultivate a passion for computer science and tech by creating an inclusive, collaborative student community. We host monthly meetings exploring programming languages, AI, and other CS topics, as well as skill-building hackathons, workshops, and speaker events open to programmers of all levels - from seasoned experts to beginners starting their journey. By providing this supportive environment, we hope to foster greater interest and engagement with computer science and technology.</p>
      </div>
      <div className="coordinators">
        <h2>Our Co-ordinators</h2>
        <div className="faculties">
          {f.map((faculty, index) => {
            const { name, image, link } = faculty;
            return (
              <div className="faculty" key={index}>
                <img src={image} alt={name} />
                <div className="nandlink">
                  <h6>{name}</h6>
                  <center>
                    <FiExternalLink
                      onClick={() => {
                        window.open(link, "blank");
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </center>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <img src={members} alt="members" />
     <br/>
     <br/>
     <div>
        <Home/>
      </div>
      <h1 className='history'>Sponsorship Partners</h1>
     <hr />
     <div className="carousel-section">
  <div className="card-container">
    {carouselData.map((slide, index) => (
      <div key={index} className="card" onClick={() => window.open(slide.link, '_blank')}>
        <img src={slide.image} alt={slide.title} className="card-img-top card-img" />
        <div className="card-body">
          <h3 style={{ color: "black" }}>{slide.title}</h3>
        </div>
        
      </div>
    ))}
  </div>
     </div>
     <br />
     
    </div>
);


}

export default About;