import {
  createStore,
  applyMiddleware
} from 'redux';
// import rootReducer from './reducers/rootReducer'
import rootReducers from './reducers/rootReducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store