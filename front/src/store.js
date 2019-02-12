import {
  createStore,
  applyMiddleware
} from 'redux';
// import rootReducer from './reducers/rootReducer'
import userReducer from './reducers/usersReducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store