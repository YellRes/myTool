import * as actionTypes from './actionType';

// type action
// {
//   type: ''
//   val: '', 
// }
export default (state = [], action) => {

  console.log(action.type);
  switch (action.type) {
    case actionTypes.ADD_IMGARR:
      console.log([...state, action.val], 'actionTypes.ADD_IMGARR');
      return [...state, action.val]
    case actionTypes.DELETE_IMGARR:
      console.log(state.filter(item => item !== action.val), 'actionTypes.DELETE_IMGARR');
      return state.filter(item => item !== action.val)

    default:
      return state
  }
}