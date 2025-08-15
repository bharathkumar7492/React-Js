import React from 'react'
import { useCustom } from '../context/Usercontext'

const Bye = () => {
    let {playerName} = useCustom()
    let {age} = useCustom()
  return (
    <div>
        <hr />
        <h1>Bye component</h1>
        <h2> {playerName} </h2>
        <h2> {age} </h2>


    </div>
  )
}

export default Bye