import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const doLogin = async(e)=>{
        e.preventDefault()
        const data = JSON.stringify({username, password})
        const url = 'http://localhost:5000/login'
        console.log(data)
        const status = await fetch(url,{
            method:'POST',
            body: data,
            headers: {'Content-Type': 'application/json'}
        })
        console.log(status)
        setPassword('')
        setUsername('')
    }
    return (
        <form className="login" onSubmit={doLogin}>
            <h1>Login</h1>

            <input 
                type="text" 
                placeholder='username' 
                value={username} 
                onChange={(e)=>{
                    setUsername(e.target.value);
                }}
            />

            <input 
                type="password" 
                placeholder='password' 
                value={password} 
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
            />
            <button>Login</button>
        </form>
    )
}

export default Login
