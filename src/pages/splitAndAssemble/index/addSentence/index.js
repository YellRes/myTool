import React, {useState} from 'react'
import { Form, Input, Button } from 'antd';
import {addSentenceFromRemote, getAllSentenceFromRemote} from '../../actions'
import {connect} from 'react-redux'

const { TextArea } = Input

const SplitAddSentence = ({onAdd, onGetAllCity}) => {
  const [form] = Form.useForm()

  const onSubmit = () => {

    const params = {
      sentence: form.getFieldValue('sentence'),
      translation: form.getFieldValue('translation'),
      createTime: new Date()
    }

    onAdd(params)
    onGetAllCity()

    form.setFieldsValue({sentence: ''})
    form.setFieldsValue({translation: ''})
  }

  return (
    <div>
      <Form
        form={form}
        onFinish={onSubmit}>

      <Form.Item
        label="句子"
        name="sentence"
        rules={[{ required: true, message: '请输入句子!' }]}
      >
          <TextArea  rows={4} />
      </Form.Item>

      <Form.Item
        label="句子翻译"
        name="translation"
        rules={[{ required: true, message: '请输入句子翻译!' }]}
      >
          <TextArea rows={4} />
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