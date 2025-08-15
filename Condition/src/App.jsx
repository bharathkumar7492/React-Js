import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import { useState } from 'react'


const App = () => {

  let [isLogin, setLogin] = useState(true);
  
  return (
    <>
      <nav>
        <h1>Condition Rendering</h1>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>

        <button onClick={()=>setLogin(pre => !pre)}>

        {
          isLogin ? "go to Signup" : "go to Login"
        }
      </button>

      
      </nav>


     <div className="main">

      
      {
        isLogin? <Login/>:<Signup/>
        }

        {/* {
          isLogin && <Login/>
        } */}
      </div>   
      
    </>
  )
}

export default App