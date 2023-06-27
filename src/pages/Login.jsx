import React, { useContext, useState } from 'react'
import { UserContext } from '../userContext';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { setUserInfo } = useContext(UserContext)
    
    const doLogin = async(e)=>{
        e.preventDefault()
        const url = 'http://localhost:5000/login'
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password}),
            credentials: 'include'
        })
        console.log(response)
        if(!response.ok)toast.error('Login failed!');
        else{
            response.json().then((userInfo)=>{
                toast.success('Login Successful!')
                setUserInfo(userInfo.data)
                // console.log(userInfo)
                setRedirect(true)
            })
            
        }
        
    }

    if(redirect){
        return (<Navigate to={'/'} />)
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

export default Login
