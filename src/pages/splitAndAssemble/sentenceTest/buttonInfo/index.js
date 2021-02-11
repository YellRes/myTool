import React from 'react'
import {Button} from 'antd'

const ButtonInfo = ({previousSentence, nextSentence}) => {
  return (
    <>
      <Button onClick={previousSentence}>上一题</Button>
      <Button onClick={nextSentence} style={{marginLeft: '15px'}}>下一题</Button>
    </>
  )
}

export default ButtonInfo