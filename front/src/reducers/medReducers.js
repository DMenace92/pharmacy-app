import {FETCH_MEDS_SUCCESS, FETCH_MEDS_LOADING, FETCH_MEDS_ERROR } from "../actions/medAction";
const initState = {
  meds: [],
  medsLoading: false,
  medsError: false,
}
const medReducers = (state = initState, action)=>{
  switch(action.type){
    case FETCH_MEDS_SUCCESS:
  return{
    ...state,
    meds: [],
  }
  case FETCH_MEDS_LOADING:
  return{
    medsLoading: true,
  }
  case FETCH_MEDS_ERROR:
  return{
    ...state,
    medsLoading: false,
    medsError: true,
  }
  default:
  return state
}
}

export default medReducers;
