import React, { useState } from 'react'

const App = () => {

      let [number , setnumber]     = useState(30)

      let [name , setname] = useState("dhoni")


  let increase =()=>{
    setnumber(number + 1)
  }

  let dicrease = ()=>{
    setnumber(number - 1)
  }

  let change =()=>{
    setname("mahii")
  }
  return (
    <>
      <h2>Number : {number}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={dicrease}>dicrease</button>

     {/* we can directly write the fuction inside event */}
     
      <button onClick={()=>setnumber(number+1)}>increase2</button>
      <button onClick={()=>setnumber(number-1)}>dicrease2</button>

      <h2>the name is {name}</h2>
      <button onClick={change}>click</button>

    </>
  )
}

export default App