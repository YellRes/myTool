import * as actionType from './actionType'

export default (state = [], action) => {

  switch(action.type) {
    case actionType.DELETE_SENTENCE:
      return state.filter(item => item._id !== action._id)
    case actionType.GET_ALL_SENTENCE:
      return [...action.sentenceArr]
    default: 
      return state
  }
}