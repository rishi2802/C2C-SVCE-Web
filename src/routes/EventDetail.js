import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./events.css"
// import poster from "../assets/eventposter.jpg"
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import db from '../firebase';
import { BallTriangle } from 'react-loader-spinner';

function EventDetail() {
//   must come from api for sake of dev now defined as const
  const [event,setEvent] = useState()
  const [loading,setLoading] = useState(true)
  const {name} = useParams()
  const getData = async() => {
    let q = query(collection(db,"Events"),where("title","==",name))
    let res = await getDocs(q)
    res.forEach((doc)=>{
      setEvent(doc.data())
    })
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    !loading ? <div className='event-detail'>
        <h1>{event.title}</h1>
        <br />
        <div className="event_inner_cont">
          <div className="poster">
              <img src={event.poster} alt="poster"/>
          </div>
          <div className="content">
              <p>{event.content}</p>
          </div>
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

export default EventDetail