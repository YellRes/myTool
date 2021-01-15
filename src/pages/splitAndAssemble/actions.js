import * as actionType from './actionType'

let sentenceId = 0

export const addSentence = (sentence = '') => (
  {
    type: actionType.ADD_SENTENCE,
    id: sentenceId++,
    sentence: sentence
  }
)

export const deleteSentence = (sentence = '') => (
  {
    type: actionType.DELETE_SENTENCE,
    id: sentenceId++,
    sentence: sentence
  }
)