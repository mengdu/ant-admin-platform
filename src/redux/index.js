import {createStore, combineReducers} from 'redux'
import counter from './reducers/counter'

const reducers = combineReducers({
  counter
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
