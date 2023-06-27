import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Navigate, useNavigate } from 'react-router-dom';

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]



const CreatePost = () => {
    const [postData, setPostData] = useState({
        title: '', summary: '', content: '', files: ''
    })
    const [redirect, setRedirect] = useState(false)
    const handleClick = async (e) =>{
        const data = new FormData()
        data.set('title', postData.title)
        data.set('summary', postData.summary )
        data.set('content', postData.content)
        data.set('file', postData.files[0])
        e.preventDefault()
        console.log(postData)
        const response = await fetch('http://localhost:5000/post', {
            method: 'POST',
            body: data,
            credentials: 'include'
        })
        if(response.ok===true){
            setRedirect(true)
        }
    }
    const navigate = useNavigate();
    if(redirect){
        navigate('/')
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
        <ReactQuill 
            value={postData.content} 
            modules={modules} 
            formats={formats}
            onChange={(value)=>{
                setPostData({...postData, content: value}) 
            }}
        />
        <button onClick={handleClick} style={{marginTop:'15px'}}>Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost
