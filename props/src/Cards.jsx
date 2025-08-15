import React from 'react'

let Cards  = (props) => {
    let {productName,price,imgSrc}=props
  return (
    <>
        

        <div className="card">
            <img src={imgSrc} alt="" />
            <h1>{productName}</h1>
            <h2>{price}</h2>

        </div>

    </>
  )
}

export default Cards