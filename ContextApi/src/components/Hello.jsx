import React from 'react'
import { useCustom } from '../context/Usercontext'

const Hello = () => {
    let {playerName} = useCustom()
  return (
    <div>
        <h1> {playerName} </h1>
    </div>
  )
}

export default Hello