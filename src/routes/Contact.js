import React,{ useEffect, useState } from 'react'
import "./contact.css"
import db from "../firebase"
import { addDoc,collection, serverTimestamp } from 'firebase/firestore/lite'
import {useNavigate} from "react-router-dom"

function Contact() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [text,setText] = useState("Submit")
  const [isActive,setIsActive] = useState(false)
  const [isSub,setIsSub] = useState()
  const navigate = useNavigate()
  const handleSubmit = async() => {
    if(name.length > 0 && email.length > 0 && message.length > 0){
      setText("Submitting...")
      let collref = collection(db,"Contact")
      await addDoc(collref,{
        name:name,
        email:email,
        message:message,
        timestamp: serverTimestamp()
      }).then(()=>{
          setEmail("")
          setName("")
          setMessage("")
          setIsSub(true)
          setIsActive(true)
          setText("Submit")
        }).catch((err)=>{
          if(err.length > 0){
            // console.log("smt went wrong pls try again")
            navigate("/smtwrong")
          }
      })
      
    }
    else{
      setIsActive(true)
      setIsSub(false)
      console.log("enter the data")
    }
  }
  useEffect(()=>{
    setTimeout(()=>{setIsActive(false)},1500)
  },[isActive])
  return (
    <div className='contact'>
      <div className={isActive?"show invalid":"invalid"} style={{backgroundColor:isSub?"#6dde31":"#de3131"}}>
        {isSub?"Submitted Successfully":"Please Fill All Feilds"}
      </div>
      <div className="input-text">
        <label htmlFor="name-input">Name</label>
        <input type="text" id='name-input' placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </div>
      <div className="input-text">
        <label htmlFor="email-input">Email</label>
        <input type="email" id='email-input' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className="message">
        <label htmlFor="message">Your Message</label>
        <textarea name="" id="message" rows="10" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
      </div>
      <button className='submit' onClick={handleSubmit}>{text}</button>
    </div>
  )
}

export default Contact