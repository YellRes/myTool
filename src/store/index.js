import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reducer as splitAndAssembleReducer} from '../pages/splitAndAssemble'
import * as clipImg from '../pages/memory/test/clipImg/reducer'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  sentences: splitAndAssembleReducer,
  clipImg: clipImg.reducer
})



const middlewares = [thunkMiddleware]
const storeEnhancers = compose(applyMiddleware(...middlewares))

export default createStore(reducer, {}, storeEnhancers)
