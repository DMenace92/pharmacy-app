import { FETCH_MEDS_SUCCESS, FETCH_MEDS_LOADING, FETCH_MEDS_ERROR, CREATE_MEDS_SUCCESS , CREATE_MEDS_LOADING , CREATE_MEDS_ERROR} from "../actions/medAction";
const initState = {
    userId: String,
    medication:String,
    quantity: String,
    doctor: String,
    dateWritten: String,
    daySupply: String,
    refills: String,
  medsLoading: false,
  medsError: false,
}
const medReducers = (state = initState, action) => {
  switch (action.type){


    case CREATE_MEDS_SUCCESS:
    // console.log(action.payload);
      return{
        ...state,
        medication: action.payload.meds.medication,
        quantity: action.payload.meds.quantity,
        doctor: action.payload.meds.doctor,
        daySupply: action.payload.meds.daySupply,
        refills: action.payload.nmeds.refills,
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
        medication: action.payload.meds.medication,
        quantity: action.payload.meds.quantity,
        doctor: action.payload.meds.doctor,
        daySupply: action.payload.meds.daySupply,
        refills: action.payload.nmeds.refills,
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
      default:
      return state
    }
}
export default medReducers
