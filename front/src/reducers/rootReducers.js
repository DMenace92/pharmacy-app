import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import medReducers from './medReducers'
import notesReducer from './notesReducer';
const rootReducer = combineReducers({
  user: usersReducer,
  meds: medReducers,
  notes: notesReducer,

})

export default rootReducer;