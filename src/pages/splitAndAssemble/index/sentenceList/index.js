import React from 'react'
import {connect} from 'react-redux'

const SplitSentenceList = ({sentenceList}) => {
  return (
    <div>

      <ul>
        {
          sentenceList.map(item => 
            <li key={item.id}>{item.sentence}</li>
          )
        }
      </ul>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    sentenceList: state.sentences || []
  }
}

export default connect(mapStateToProps, null)(SplitSentenceList)