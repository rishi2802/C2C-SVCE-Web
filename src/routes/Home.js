import React, { useMemo } from 'react'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import slide from "../assets/slideimg.jpg"
import hack from "../assets/hack.jpg"
import mag from "../assets/mag.jpg"
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore/lite'
import db from '../firebase'
import { BallTriangle } from 'react-loader-spinner';
import symp from "../assets/symp.jpg"

function Home() {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/homepagepics%2FDSCF0051.JPG?alt=media&token=4b18b598-4eda-4b75-b6fc-388f14db36de",
    "https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/homepagepics%2FDSCF0153.JPG?alt=media&token=55a531cb-9846-49f6-93d5-fd5eab8aa2bc",
    "https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/DSCF0170.JPG?alt=media&token=ecac3c05-3dcc-4928-abba-fb090e37dbe2",
    "https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/homepagepics%2FDSCF0124.JPG?alt=media&token=e272c6bf-8580-47a8-b074-2b46f1890d72",
    "https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/homepagepics%2Fgrp.jpg?alt=media&token=a0493549-d9e9-4df8-8047-e548d699cb81",
    "https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/homepagepics%2FDSCF0191.JPG?alt=media&token=dc0809a2-893b-4e29-a96a-fe5ae6880285",
    "https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/homepagepics%2FDSCF0604.JPG?alt=media&token=0002ccb9-8c94-4d46-badf-c0a5478eccf8",
    "https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/homepagepics%2FDSCF0619.JPG?alt=media&token=e4aaf1de-a984-4a1a-b4cc-8d507096351b",
    "https://firebasestorage.googleapis.com/v0/b/c2cweb-72239.appspot.com/o/homepagepics%2FDSCF0713.JPG?alt=media&token=ff375efd-5771-4640-b56c-7cb12d5e275a"
  ]
  // const slideStyle = {
  //   backgroundImage:`url(${slide1})`,
  //   backgroundSize:'cover',
  //   width:'100%',
  //   height:'inherit',
  //   display:"flex",
  //   alignItems:"center",
  //   justifyContent:"center"
  // }
  const data = useMemo(()=>{
    return [
    {
      img:hack,
      text:"",
      isclick:false,
      link:""
    },
    {
      img:mag,
      text:"",
      isclick:true,
      link:"#"
    },
    {
      img:symp,
      text:"",
      isclick:false,
      link:""
    }
  ]},[])
  const [loading, setLoading] = useState(true)
  const [index,setIndex] = useState(0)
  const [blogs,setBlogs] = useState([])
  const getData = async() => {
    let collRef = query(collection(db,"Blogs"),orderBy("timestamp","desc"),limit(4))
    let res = await getDocs(collRef)
    res.forEach((doc)=>{
      setBlogs(prev => {
        return [doc.data(), ...prev]
      })
    })
    // setBlogs((prev)=>{
    //   return prev.slice(4)
    // })
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[])
  useEffect(()=>{
    let slide = setInterval(()=>{
      setIndex(index+1)
    },4000)
    return ()=>{clearInterval(slide)}
  },[index])

  useEffect(()=>{
    let lastIndex = data.length -  1
    if(index > lastIndex){
      setIndex(0)
    }
    if(index < 0){
      setIndex(lastIndex)
    }
  },[index,data])

  return (
    <div>
         <div className="gallery">
          <h1>Gallery</h1>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}>
                <Masonry gutter='5px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
      </div>
      <div className="blogs">
        <h1>BLOGS</h1>
        <div className="blogs-cont">
          {!loading ? blogs.map((blog,index)=>{
            const {title,poster,overview} = blog
            return <Link style={{textDecoration:"none",color:"black"}} className="blog" key={index} to={`/blog/${title}`}>
              <div className="inner-img">
                <img src={`${poster}`} alt="blog" />
                <div className="inner-overview">
                  <div className="head-time">
                    <h2>{title}</h2>
                    
                  </div>
                  <p>{overview}</p>
                </div>
              </div>
            </Link>
          }):<div style={{margin:"15px auto",width:"fit-content"}}><BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#fff"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
      /></div>}
        </div>
        <button><Link className='link' style={{color:"black"}} to="/blogs">View All</Link></button>
      </div>
    </div>
  )
}

export default Home