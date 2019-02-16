import { FETCH_MEDS_SUCCESS, FETCH_MEDS_LOADING, FETCH_MEDS_ERROR, CREATE_MEDS_SUCCESS , CREATE_MEDS_LOADING , CREATE_MEDS_ERROR , DELETE_MEDS_SUCCESS , DELETE_MEDS_ERROR, DELETE_MEDS_LOADING } from "../actions/medAction";
const initState = {
  meds: [],
    // userId: String,
    // medication:String,
    // quantity: String,
    // doctor: String,
    // dateWritten: String,
    // expired: String,
    // daySupply: String,
    // refills: String,
    // directions:String,
  medsLoading: false,
  medsError: false,
}
const medReducers = (state = initState, action) => {
  switch (action.type){


    case CREATE_MEDS_SUCCESS:
    // console.log(action.payload);
      return{
        ...state,
        meds: [...state.meds,action.payload],
        // medication: action.payload.meds.medication,
        // quantity: action.payload.meds.quantity,
        // doctor: action.payload.meds.doctor,
        // daySupply: action.payload.meds.daySupply,
        // dateWritten: action.payload.meds.dateWritten,
        // expired: action.payload.meds.expired,
        // refills: action.payload.meds.refills,
        // directions: action.payload.meds.directions,
        medsLoading: false,
        medsError: false,
      }
      case CREATE_MEDS_ERROR:
      return{
          ...state,
          medsError: true,
        }
    case CREATE_MEDS_LOADING:
      return{
        ...state,
        medsLoading: true
    }
    case FETCH_MEDS_SUCCESS:
    // console.log(action.payload);
      return{
        ...state,
        meds: action.payload,
        // medication: action.payload.meds.medication,
        // quantity: action.payload.meds.quantity,
        // doctor: action.payload.meds.doctor,
        // daySupply: action.payload.meds.daySupply,
        // dateWritten: action.payload.meds.dateWritten,
        // expired: action.payload.meds.expired,
        // refills: action.payload.meds.refills,
        // directions: action.payload.meds.directions,
        medsLoading: false,
        medsError: false,
      }
      case FETCH_MEDS_ERROR:
      return{
          ...state,
          medsError: true,
        }
    case FETCH_MEDS_LOADING:
      return{
        ...state,
        medsLoading: true
    }
    case DELETE_MEDS_SUCCESS:
    return{
      ...state,
      meds : state.meds.filter(med => med !== action.payload )

    }
    case DELETE_MEDS_ERROR:
    return{
      ...state,
      medsError: true,
    }
    case DELETE_MEDS_LOADING:
    return{
      ...state,
      medsLoading: true

    }
      default:
      return state
    }
}
export default medReducers
