import React, {useEffect} from 'react';
import AddSentence from './addSentence/index'
import SentenceList from './sentenceList/index'
import * as actions from '../actions'
import {connect} from 'react-redux'

const SplitIndex = ({history, onGetAllCity}) => {
  
  const toTest = (history) => {
    history.push('/splitSentenceTest')
  }

  useEffect(() => {
    onGetAllCity()
  }, [])


  return (
    <div>
      <p onClick={() => toTest(history)}>去测试</p>
      <AddSentence/>
      <SentenceList/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllCity: () => {
      dispatch(actions.getAllSentenceFromRemote())
    }
  }
}

export default connect(null, mapDispatchToProps)(SplitIndex)