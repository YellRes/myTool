import React from 'react';
import './index.css'

const TreePoint = (props) => {
  const {icon} = props
  
  return (
    <div className="treePoint_container">
      {icon}
    </div>
  )
}

export default TreePoint
