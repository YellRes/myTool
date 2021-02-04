import React, {useState} from 'react'
import { Form, Input, Button } from 'antd';
import {addSentenceFromRemote, getAllSentenceFromRemote} from '../../actions'
import {connect} from 'react-redux'

const { TextArea } = Input

const SplitAddSentence = ({onAdd, onGetAllCity}) => {
  const [value, setValue] = useState('')
  const [translation, setTranslation] = useState('')

  const onInputChange = (e, type) => {

    type === 1 && setValue(e.target.value)
    type === 2 && setTranslation(e.target.value)
  }

  const onSubmit = () => {
    // if (!e.trim()) return 

    const params = {
      sentence: value,
      translation
    }
    onAdd(params)
    onGetAllCity()

    setValue('')
    setTranslation('')
  }

  return (
    <div>
      <Form
        onFinish={onSubmit}>

      <Form.Item
        label="句子"
        name="sentence"
        rules={[{ required: true, message: '请输入句子!' }]}
      >
          <TextArea value={value} rows={4} onChange={(e) => onInputChange(e, 1)}/>
      </Form.Item>

      <Form.Item
        label="句子翻译"
        name="translation"
        rules={[{ required: true, message: '请输入句子翻译!' }]}
      >
          <TextArea value={translation} rows={4} onChange={(e) => onInputChange(e, 2)}/>
      </Form.Item>

      <Button type="primary" htmlType="submit">添加</Button>


      </Form>
      
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