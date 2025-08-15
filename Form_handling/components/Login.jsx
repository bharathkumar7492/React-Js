import React from 'react'
import "./Login.css"
import { useState } from 'react'

import { NavLink } from 'react-router-dom'

const Login = () => {
    let [loginName,setLoginName] = useState(" ")
    let [loginPass,setLoginPass] = useState(" ")

    let handleLoginName = (e)=>{
        setLoginName(e.target.value)
    }
    let handleLoginPass = (e)=>{
        setLoginPass(e.target.value)
    }

    let handleSubmit = (e)=>{
        e.preventDefault()

        console.log({loginName,loginPass})
        
        setLoginName(" ")
    
        setLoginPass(" ")
    }
        
  return (
    <div className='login'>
        <div className="logleft">

            <h1>Login page</h1>

            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="">E-mail</label>
                <input type="text" placeholder='user email' value={loginName} onChange={handleLoginName} />

                <label htmlFor="">Password</label>
                <input type="text" placeholder='user password' value={loginPass}
                onChange={handleLoginPass}/>

                <button>Register</button>
                
                <footer>
                    <p>don't have an account?</p>

                    <NavLink to="/" >Signup</NavLink>
                </footer>
            </form>

        </div>
        <div className="logright">
    
            {/* <img src="" alt="" /> */}
        </div>
    </div>
  )
}

export default Login