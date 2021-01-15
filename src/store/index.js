import {createStore, combineReducers} from 'redux'
import {reducer as splitAndAssembleReducer} from '../pages/splitAndAssemble'

const reducer = combineReducers({
  sentences: splitAndAssembleReducer
})

export default createStore(reducer)
