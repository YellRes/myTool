import * as actionType from './actionType'
import * as api from '../../api/config'

let sentenceId = 0

export const addSentence = (sentence = '') => (
  {
    type: actionType.ADD_SENTENCE,
    id: sentenceId++,
    sentence
  }
)

export const deleteSentence = (sentence = '') => (
  {
    type: actionType.DELETE_SENTENCE,
    id: sentenceId++,
    sentence
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

export const addSentenceFromRemote = (sentence) => {
  return async (dispatch) => {
    await api.addSentenceApi(sentence)
  }
}

