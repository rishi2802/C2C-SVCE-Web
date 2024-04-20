import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import ReactMarkdown from 'react-markdown'
import "./blog.css"
import { BallTriangle } from 'react-loader-spinner'

function Blog() {
  const title = useParams().title
  const [loading,setLoading] = useState(true)
  const [blog,setBlog] = useState()
  const getData = async() => {
    let q = query(collection(db,"Blogs"),where("title","==",title))
    let res = await getDocs(q)
    res.forEach((doc)=>{
        setBlog(doc.data())
    })
    console.log(title)
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[title])
  return (
    !loading ? <div className='indi-blog'>
        {/* <h4>{blog.title}</h4> */}
        <ReactMarkdown className='markdown'>{blog.content}</ReactMarkdown>
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

export default Blog