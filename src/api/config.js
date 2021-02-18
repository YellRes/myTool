import axios from 'axios'

export const findAllSentenceApi = () => {
    return axios.post('/engSentence/findAllSentence', {
    })
}

export const findAllSentenceApiBySth = (params) => {
  return axios.post('/engSentence/findSentenceBySth', {
    ...params
  })
}

export const addSentenceApi = (params) => {
    return axios.post('/engSentence/addSentence', {
      ...params
    })
}

export const deleteSentenceApi = (params) => {
  return axios.post('/engSentence/deleteSentence', {
    sentenceId: params.sentenceId
  })
}
