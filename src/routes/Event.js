import React, { useEffect, useState } from 'react'
import "./events.css"
import eventimg from "../assets/gallery/gal1.jpg"
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore/lite'
import db from '../firebase'
import { BallTriangle } from 'react-loader-spinner'

function Event() {
  const [events,setEvents] = useState([])
  const [loading,setLoading] = useState(true)
  const getData = async() => {
    let collRef = collection(db,"Events")
    let res = await getDocs(collRef)
    res.forEach((doc)=>{
      setEvents(prev => {
        return [doc.data(), ...prev]
      })
    })
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    !loading ? <div className='events'>
      <h2 style={{color:"white"}}>Events</h2>
      <div className="events-cont">
        {events.map((e,index)=>{
          const {image,title} = e
          return <Link style={{color:"black",textDecoration:"none"}} to={`/event/${title}`} className="event" key={index}>
            <img src={image} alt="event" />
            <p style={{margin:"5px"}}>{title}</p>
          </Link>
        })}
      </div>
    </div>:<div style={{margin:"15px auto",width:"fit-content"}}><BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#fff"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
      /></div>
  )
}

export default Event