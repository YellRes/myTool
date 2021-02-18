import * as actionType from './actionType'
import * as api from '../../api/config'

export const addSentence = ({sentence = '', _id = ''}) => (
  {
    type: actionType.ADD_SENTENCE,
    _id,
    sentence
  }
)

export const deleteSentence = (_id = '') => (
  {
    type: actionType.DELETE_SENTENCE,
    _id,
  }
)

export const getAllSentence = (sentenceArr) => {
  return {
    type: actionType.GET_ALL_SENTENCE,
    sentenceArr
  }
}

export const getAllSentenceFromRemote = () => {
  return async (dispatch) => {
    let sentenceArr = await api.findAllSentenceApi()
    dispatch(getAllSentence(sentenceArr && sentenceArr.data))
  }
}

export const getAllSentenceFromRemoteBySth = (params) => {
  return async (dispatch) => {
    let sentenceArr = await api.findAllSentenceApiBySth(params)
    dispatch(getAllSentence(sentenceArr && sentenceArr.data))
  }
}

export const addSentenceFromRemote = (sentence) => {
  return async (dispatch) => {
    await api.addSentenceApi(sentence)
  }
}

export const deleteSentenceFromRemote = (sentenceId) => {
  return async (dispatch) => {
    await api.deleteSentenceApi({sentenceId})
    dispatch(deleteSentence(sentenceId))
  }
} 

