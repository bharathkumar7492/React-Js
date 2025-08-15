import React, { useState } from 'react'

const App = () => {
  let [todo , setTodo] = useState("")
  let[todoList, setTodoList]= useState([])

  let addTodo =()=>{
    setTodoList([...todoList,todo])


  }


  // let arr = ["html","css","js","react"]
  return (
    <div className='outer'>

      <h1>Todo List</h1>

      <div className="search">
        <input type="text"  placeholder='add todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={addTodo}>add</button>
      </div>

      <div className="box">

        {
      todoList.map((ele,index) =>{

        return(
          <div className='list'>{ele}  <button>delete</button></div>
        )

      })

    }
      </div>
      
    </div>
  )
}

export default App