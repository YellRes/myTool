import * as actionType from './actionType'

export default (state = [], action) => {
  switch(action.type) {
    case actionType.ADD_SENTENCE:
      return [
        {
          id: action.id,
          sentence: action.sentence
        },
        ...state
      ]
    case actionType.DELETE_SENTENCE:
      return state.filter(item.id !== action.id)
    default: 
      throw new Error('change sentence reducer is not supported ')
  }
}