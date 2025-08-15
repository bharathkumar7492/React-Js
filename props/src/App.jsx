import React from 'react'
import Cards from './Cards'

const App = () => {
  return (
    <>
      
      <div className="outer">
        <Cards productName={"Shirt"} price={1000} imgSrc={"https://images.pexels.com/photos/1682699/pexels-photo-1682699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
        <Cards productName={"Watch"} price={3000} imgSrc={"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"}/>
        <Cards productName={"Shoe"} price={2000} imgSrc={"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
      </div>
    
    </>
  )
}

export default App
