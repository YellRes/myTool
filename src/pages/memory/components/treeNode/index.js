import React from 'react'

const TreeNode = (props) => {
  let head
  let body
  let coverImg

  const {
    title,
    description,
    imgUrl,
    children,
    ...otherProps
  } = props
  
  coverImg = imgUrl ? <img src={imgUrl}/> : <img/>
  head = title ? <div>{title}</div> : null
  body = description ? <div>{description}</div> : null
  
  return (
    <div {...otherProps}>
      <coverImg/>
      <head/>
      <body/>
      <children/>
    </div>
  )
}


export default TreeNode

