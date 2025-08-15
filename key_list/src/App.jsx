import React from 'react'

const App = () => {

let myName = "barath"
let myAge = 23

let skills = ["html","css","js","python","sql"]

let player =[{
  id:1,
  pname:"dhoni",
  age:23
},{
  id:1,
  pname:"virat",
  age:22
},{
  id:1,
  pname:"iyar",
  age:12
},{
  id:1,
  pname:"rohit",
  age:25
}]
  return (
    <>
    <h1>This is app component</h1>

    <h2>My name is :{myName}</h2>
    <h2>My age is :{myAge}</h2>

    {
      skills.map((ele,index)=>{
        return(
          <li key={index}> {ele} </li>
        )
      })
    }
    <div className='con'>
      {
      player.map((ele,index)=>{
        return(
                <div className='box' key={ele.id}>
                  <h2> {ele.pname} </h2>
                  <h2> {ele.age} </h2>
                </div>
        )
      })
    }
    </div>
    
    
    </>
  )
}

export default App
