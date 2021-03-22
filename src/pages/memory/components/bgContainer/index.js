import React from 'react'
import './index.css'

const BgContainer = (props) => {
  const {
    imgUrl,
    children
  } = props   

  return (
    <div  className="bg_image" style={{backgroundImage: `url(${imgUrl})`}}>
      {children}
    </div>
  ) 
}

export default BgContainer