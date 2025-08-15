import React from 'react'
import UserProvider from './context/Usercontext'
import Hello from './components/hello'
import Bye from './components/bye'
import Hi from './components/Hi'



const App = () => {
  return (
    <>

      {/* call components wrap inside  <UserProvider> which components have to access it  */}

      <UserProvider>

          <Hello/>
          <Hi/>
          <Bye/>
      </UserProvider>
      


    </>
  )
}

export default App