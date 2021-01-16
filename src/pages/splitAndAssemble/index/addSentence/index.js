import React, {useState} from 'react'
import {addSentence} from '../../actions'
import {connect} from 'react-redux'

const SplitAddSentence = ({onAdd}) => {
  const [value, setValue] = useState('')

  const onInputChange = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = (e = '') => {
    if (!e.trim()) return 

    onAdd(e)

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
      dispatch(addSentence(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(SplitAddSentence)