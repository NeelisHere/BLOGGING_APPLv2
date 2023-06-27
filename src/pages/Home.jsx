import React, { useState, useEffect } from 'react'
import Post from './Post.jsx'
import { v4 } from 'uuid'

const url = 'http://localhost:5000/post'

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        // console.log(data)
        setPosts(data)
      })
  },[])

  return (
    <div>
      {posts.length > 0 && posts.map((post)=>(<Post key={v4()} {...post}/>))}
    </div>
  )
}

export default Home
