import React, {memo} from 'react'
import {Table} from 'antd'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import './index.css'

const {Column} = Table



const SplitSentenceList = memo(({sentenceList, onDeleteSentence, showModal}) => {
  return (
    <div className="sentence_list">
      <Table 
        dataSource={sentenceList}>
          <Column title="句子"
            render={
              item => (
                <>
                  <div>{item.sentence}</div>
                  <div>{item.translation}</div>
                </>
              )
            }/>

          <Column
            title="操作"
            key="action"
            render= { item => (
              <>
                <a>修改</a>
                <a onClick={() => showModal(item._id)}>删除</a>
              </>
            )
            }>
            
          </Column>
      </Table>

    </div>
  )
}) 

const mapStateToProps = (state) => {
  return {
    sentenceList: state.sentences || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplitSentenceList)