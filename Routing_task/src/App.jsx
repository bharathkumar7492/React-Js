import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'


import { BrowserRouter, Routes, Route }  from 'react-router-dom'
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/" element={<About/>}></Route>
          <Route path="/" element={<Contact/>}></Route>
          </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App