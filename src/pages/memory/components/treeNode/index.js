import React from 'react'
import './index.css'

const TreeNode = (props) => {
  let head
  let body
  let coverImg

  const {
    title,
    description,
    imgUrl,
    children,
    className,
    ...otherProps
  } = props
  
  coverImg = 
  imgUrl ? <div className="tree_img_container"> <img src={imgUrl} className="treeN_img"/> </div>: null
  head = title ? <div className="treeN_title">{title}</div> : null
  body = description ? <div className="treeN_description">{description}</div> : null

  let container = (
    <div className={`treeN_container_right`} >
      {head}
      {body}
      {children}
    </div>
  )
  
  return (
    <div {...otherProps} className= {`treeN_container ${className}`} >
        {coverImg}
        {container}
    </div>
  )
}


export default TreeNode

