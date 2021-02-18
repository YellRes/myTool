import React, {useState} from 'react';
import { DatePicker, Button } from 'antd';
import * as actions from '../../actions'
import {connect} from 'react-redux'
import './index.css'

const { RangePicker } = DatePicker;

const SentenceFilter = ({findSentenceBySth}) => {
  const [startTime, setStartDate] = useState('')
  const [endTime, setEndDate] = useState('')

  const toSearch = (date) => {
    findSentenceBySth({
      startTime,
      endTime
    })
  }

  const onDateChange = (date, dateString) => {
    setStartDate(dateString[0])
    setEndDate(dateString[1])
  }

  return (
    <>
      <div className="sentence_filter">
        <RangePicker onChange={onDateChange} placeholder={['起始时间', '截至时间']}/>
        <Button onClick={toSearch} className="sentence_search">查询</Button>      
      </div>
    </>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    findSentenceBySth: (params) => {
      dispatch(actions.getAllSentenceFromRemoteBySth(params))
    }
  }
}

export default connect(null, mapDispatchToProps)(SentenceFilter)