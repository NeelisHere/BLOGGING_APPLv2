import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const displayToast = (response) => {
  if(response.ok === true){
    toast.success('User registered!')
  }else{
    toast.error('Registration failed!');
  }
}

const Register = () => { 
  const [data, setData] = useState({
    username:'', 
    email:'', 
    password:'', 
  })
  const register = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:5000/register'
    const response = await fetch(url, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    console.log(response)
    displayToast(response)
    setData({...data, username:'', email:'', password:''})
  }
  return (
    <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input 
          type="text" 
          placeholder='username' 
          value={data.username}
          onChange={(e)=>{
            setData({...data, username: e.target.value})
          }} 
        />
        <input 
          type="email" 
          placeholder='email' 
          value={data.email}
          onChange={(e)=>{
            setData({...data, email: e.target.value})
          }} 
        />
        <input 
          type="password" 
          placeholder='password' 
          value={data.password}
          onChange={(e)=>{
            setData({...data, password: e.target.value})
          }} 
        />
        <button>Register</button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </form>
  )
}

export default Register
