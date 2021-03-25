import * as actionTypes from './actionType'

export const addImgArr = (val) => {
  return {
    type: actionTypes.ADD_IMGARR, 
    val
  }
}

export const deleteImgArr = (val) => {
  return {
    type: actionTypes.DELETE_IMGARR, 
    val
  }
}

