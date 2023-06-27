import { formatISO9075 } from 'date-fns'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../userContext.js'

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null)
    const { userInfo } = useContext(UserContext)

    const {id} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:5000/post/${id}`)
            .then((res)=>res.json())
            .then((data)=>{
                setPostInfo(data)
            })
        
    },[])

    if(!postInfo) return ""

    return (
        <div className="post-page">
            <h1>{postInfo.data.title}</h1>
            <time>{ formatISO9075(new Date(postInfo.data.createdAt)) }</time>
            <div className="author">by @{ postInfo.data.author.username }</div>
            {userInfo.id === postInfo.data.author._id && (
                <div className="edit-row">
                    <Link style={{textDecoration: 'none', color:'#333'}} to={`/edit/${postInfo.data._id}`}>Edit Post</Link>
                </div>
            )}
            <div className='image'>
                <img src={`http://localhost:5000/${postInfo.data.cover}`} alt="" />
            </div>
            
            <div dangerouslySetInnerHTML={{__html:postInfo.data.content}}/>
                
        </div>
    )
}

export default PostPage
