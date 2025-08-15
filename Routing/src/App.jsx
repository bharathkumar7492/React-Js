import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/" element={<About/>}></Route>
          <Route path="/" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      

      
    </div>
  )
}

export default App