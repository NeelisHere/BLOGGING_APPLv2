import React, { useState } from 'react'

const Register = () => { 
  const [data, setData] = useState({
    username:'', 
    email:'', 
    password:'', 
  })
  const register = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:5000/register'
    console.log(data)
    await fetch(url, {
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
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
    </form>
  )
}

export default Register
