import {CREATE_NOTES_SUCCESS, CREATE_NOTES_ERROR,CREATE_NOTES_LOADING,FETCH_NOTES_SUCCESS,FETCH_NOTES_LOADING,
FETCH_NOTES_ERROR, DELETE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING,
UPDATE_NOTES_SUCCESS, UPDATE_NOTES_LOADING,
UPDATE_NOTES_ERROR} from "../actions/notesActions";

const initState = {
  notes:[],
  // title: "",
  // content: "",
  timestamps: true,
  notesLoading: false,
  notesError: false,
}
const notesReducer = (state = initState, action)=>{
switch(action.type){
  //creating
  case CREATE_NOTES_LOADING:
  return{...state,notesLoading:true}
  case CREATE_NOTES_SUCCESS:
  return{
    ...state,
    notes:[...state.notes,action.payload],
    // id: action.payload.notes.id,
    // title: action.payload.notes.title,
    // content: action.payload.notes.content,
    notesLoading: false,
    notesError: false,
  }
  case CREATE_NOTES_ERROR:
  return{
    ...state,
    notesError: true,
  }
  //fetch
  case FETCH_NOTES_SUCCESS:
  console.log(action.payload)
  return{
  
    ...state,
    notes: action.payload,
    // id: action.payload.notes.id,
    // title: action.payload.notes.title,
    // content: action.payload.notes.content,
    notesLoading: false,
    notesError: false,
  }
  case FETCH_NOTES_LOADING:
  return{
    notesLoading: true,
  }
  case FETCH_NOTES_ERROR:
  return{
    ...state,
    notesError: true,
  }
  //UPDATE
  case UPDATE_NOTES_SUCCESS:
  return{
    ...state,
    
    id: "",
    title: "",
    content:"",
    notesLoading: false,
    notesError: false,
  }
  case UPDATE_NOTES_LOADING:
  return{
    ...state,
    notesLoading: true,
  }
  case UPDATE_NOTES_ERROR:
  return{
    ...state,
    notesError: true,
  }
  //DELETE
  case  DELETE_NOTES_SUCCESS:
  return {
    ...state,
    notes: state.notes.filter(notes => notes._id !== action.payload._id )
  }
  case DELETE_NOTES_ERROR:
  return{
  ...state,
  notesError: true,
  }
  case DELETE_NOTES_LOADING:
  return{
    ...state,
    notesLoading: true,
  }
  default:
  return state
  }
}





export default notesReducer;