import React, {setState} from 'react'
import {addSentence} from '../../actions'
import {connect} from 'react-redux'

const addSentence = ({onAdd}) => {
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addSentence(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(addSentence)