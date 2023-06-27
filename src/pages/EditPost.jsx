import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from './Editor'

const EditPost = () => {
    const { id } = useParams()
    const initialState = {
        title: '', summary: '', content: '', files: ''
    }
    const [postData, setPostData] = useState(initialState)
    // const [cover, setCover] = useState('')
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:5000/post/${id}`)
            .then((res)=>res.json())
            .then((postInfo)=>{
                console.log(postInfo)
                setPostData({
                    ...postData,
                    title: postInfo.data.title,
                    content: postInfo.data.content,
                    summary: postInfo.data.summary,

                })
            })
    },[])

    const handleClick = async (e) =>{
        e.preventDefault()
        const data = new FormData()
        const { title, summary, content, files } = postData
        data.set('title', title)
        data.set('summary', summary )
        data.set('content', content)
        data.set('id', id)
        if(files?.[0]){
            data.set('file', postData.files?.[0])
        }
        // console.log(postData)
        const response = await fetch('http://localhost:5000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include'
        })
        if(response.ok===true){
            setRedirect(true)
        }
    }

    const navigate = useNavigate();
    if(redirect){
        navigate('/post/'+id)
    }
    return (
        <div>
        <form className='post-form'>
            <input 
                type="title" 
                placeholder={'Title'} 
                value={postData.title} 
                onChange={(e)=>{
                    setPostData({...postData, title: e.target.value}) 
                }}
            />
            <input 
                type="Summary" 
                placeholder={'Summary'} 
                value={postData.summary}
                onChange={(e)=>{
                    setPostData({...postData, summary: e.target.value}) 
                }}
            />
            <input 
                type="file" 
                onChange={(e)=>{
                    setPostData({...postData, files: e.target.files}) 
                }}
            />
            <Editor 
                value={postData.content}
                onChange={(value)=>{
                    setPostData({...postData, content: value}) 
                }} 
                
            />
            <button onClick={handleClick} style={{marginTop:'15px'}}>Update Post</button>
        </form>
        </div>
    )
}

export default EditPost
