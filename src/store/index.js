import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reducer as splitAndAssembleReducer} from '../pages/splitAndAssemble'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  sentences: splitAndAssembleReducer
})


const middlewares = [thunkMiddleware]
const storeEnhancers = compose(applyMiddleware(...middlewares))

export default createStore(reducer, {}, storeEnhancers)
