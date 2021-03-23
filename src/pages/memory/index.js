import React from 'react';
import BgGrey from './sunbg/components/bgGrey/index'
import BgSunny from './sunbg/components/bgSunny/index'
import {TreeNode} from './components'
import CanvasImg from './canvasImg.js'
import './index.css'

// TODO: TreePoint
// TODO: TreeBranch
// TODO: TreeNode

const memoryTree = (props) => {


  
  return (
    <div className="memory_con">

      <div className="memory_time">
        <TreeNode
          imgUrl="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/055625ec77774751af884d12be6213c6~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:120:120.awebp"
          title="this is the time"
          description="this is the description" 
          />

<div style={{height: '400px', width: '300px'}}>
        <CanvasImg/>
      </div>
      </div>
      {
        Math.random() > .5 ? < BgGrey/> :  <BgSunny /> 
      }

     
            
    </div>
  )
}

export default memoryTree 