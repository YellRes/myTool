import React from 'react'
import {TreeNode, TreePoint} from '../index'
import './index.css'

const TreeBranchItem = (props) => {

  const {icon, style, ...other} = props
  
  return (
    <div className="branch_item" style={style} >
      <TreePoint icon={icon}> </TreePoint>
      <TreeNode {...other} className="branch_item_node"/>
    </div>
  )

}

export default TreeBranchItem