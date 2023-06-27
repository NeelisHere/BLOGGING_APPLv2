import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './userContext'

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext)
  const navigate = useNavigate();
  const profile_url = 'http://localhost:5000/profile'
  useEffect(()=>{
    fetch(profile_url, {
      credentials: 'include'
    }).then((res)=>{
      res.json().then((userInfo) => {
        setUserInfo(userInfo)
      })
    })
  },[])

  const logout = ()=>{
    const logout_url = 'http://localhost:5000/logout'
    fetch(logout_url, {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
    navigate('/login')
  }
  
  const username = userInfo?.username

  return (
    <div>
      <header>
        <Link to="/" className="logo">Blogs</Link>
        <nav>
          {username && (
            <>
              <span>Hello, {username}</span>
              <Link to="/create">Create</Link>
              <a style={{cursor: 'pointer'}} onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          
        </nav>
      </header>
    </div>
  )
}

export default Header
