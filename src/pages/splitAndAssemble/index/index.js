import React from 'react';
import AddSentence from './addSentence/index'
import SentenceList from './sentenceList/index'

const SplitIndex = (props) => {
  

  const toTest = (history) => {
    history.push('/splitSentenceTest')
  }

  return (
    <div>
      <p onClick={() => toTest(props.history)}>去测试</p>
      <AddSentence/>
      <SentenceList/>
    </div>
  )
}

export default SplitIndex