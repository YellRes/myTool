import React, {useState} from 'react'
import {addSentenceFromRemote, getAllSentenceFromRemote} from '../../actions'
import {connect} from 'react-redux'

const SplitAddSentence = ({onAdd, onGetAllCity}) => {
  const [value, setValue] = useState('')

  const onInputChange = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = (e = '') => {
    if (!e.trim()) return 

    const params = {
      sentence: e
    }
    onAdd(params)
    onGetAllCity()

    setValue('')
  }

  return (
    <div>
      <textarea value={value} onChange={onInputChange}/>
      <button onClick={() => onSubmit(value)}>添加</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addSentenceFromRemote(text))
    },
    onGetAllCity: () => {
      dispatch(getAllSentenceFromRemote())
    }
  }
}

export default connect(null, mapDispatchToProps)(SplitAddSentence)