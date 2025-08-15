import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    let [name,setName] = useState(" ")
    let [email,setEmail] = useState(" ")
    let [pass,setPass] = useState(" ")

    let handleName = (e)=>{
        setName(e.target.value)
    }

    let handleEmail = (e)=>{
        setEmail(e.target.value)
    }

    let handlePass = (e)=>{
        setPass(e.target.value)
    }

    let handleSubmit = (e)=>{
        e.preventDefault()

        console.log({name,email,pass})
        
        setName(" ")
        setEmail(" ")
        setPass(" ")
    }

  return (
    <div className='signup'>

        <div className="left">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdUgFv52IlYNsucG0y4BAHkAIGfKIHus8Cg&s" alt="" /> */}

        </div>

        <div className="right">
            <h1>Signup page</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='user name' value={name} onChange={handleName} />

                <label htmlFor="">E-mail</label>
                <input type="text" placeholder='user email' value={email} onChange={handleEmail} />

                <label htmlFor="">Password</label>
                <input type="text" placeholder='user password' value={pass}
                onChange={handlePass}/>

                <button>Register</button>
                
                <footer>
                    <p>Alredy have a account</p>
                    <NavLink to='/login'>Login</NavLink>
                </footer>
            </form>

        </div>
    </div>
  )
}

export default Signup