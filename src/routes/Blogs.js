import { collection, getDocs, orderBy, query } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../firebase'
import "./blog.css"
import { BallTriangle } from 'react-loader-spinner'

function Blogs() {
  const [blogs,setBlogs] = useState([])
  const [loading,setLoading] = useState(true)
  const getData = async() => {
    let q = query(collection(db,"Blogs"),orderBy("timestamp"))
    let res = await getDocs(q)
    res.forEach((doc)=>{
      setBlogs(prev => {
        return [doc.data(), ...prev]
      })
    })
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    !loading ? <div className='blogs-main'>
      {/* <h2>Blogs</h2> */}
        {blogs.map((blog)=>{
          let {title,poster} = blog
          return <Link to={`/blog/${title}`} style = {{textDecoration:"none"}} className="inner-blog">
            <img src={poster} alt="" />
            <p>{title}</p>
          </Link>
        })}
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

export default Blogs