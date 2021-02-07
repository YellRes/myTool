import React, {useState, useEffect} from 'react';
import AddSentence from './addSentence/index'
import SentenceList from './sentenceList/index'
import * as actions from '../actions'
import {Button, Modal} from 'antd'
import {connect} from 'react-redux'

const SplitIndex = ({history, onGetAllCity, onDeleteSentence}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [id, setId] = useState('')

  const toTest = (history) => {
    history.push('/splitSentenceTest')
  }

  const handleOk = async () => {
    setIsModalVisible(false);
    id && await onDeleteSentence(id)

  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const showModal = (id) => {
    setIsModalVisible(true)
    setId(id)
  }

  useEffect(() => {
    onGetAllCity()
  }, [])

  return (
    <div>
      <Button onClick={() => toTest(history)}>去测试</Button>
      <AddSentence/>
      <SentenceList
        showModal={showModal}
        /> 
      <Modal 
        title="是否确认" visible={isModalVisible} 
        onOk={handleOk} onCancel={handleCancel}/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllCity: () => {
      dispatch(actions.getAllSentenceFromRemote())
    },
    onDeleteSentence: (id) => {
      dispatch(actions.deleteSentenceFromRemote(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(SplitIndex)