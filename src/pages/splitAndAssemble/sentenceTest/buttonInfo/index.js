import React from 'react'

const ButtonInfo = ({previousSentence, nextSentence}) => {
  return (
    <>
      <button onClick={previousSentence}>上一题</button>
      <button onClick={nextSentence}>下一题</button>
    </>
  )
}

export default ButtonInfo