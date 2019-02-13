import {CREATE_NOTES_SUCCESS, CREATE_NOTES_ERROR,CREATE_NOTES_LOADING,FETCH_NOTES_SUCCESS,FETCH_NOTES_LOADING,
FETCH_NOTES_ERROR, DELETE_NOTES_SUCCESS, DELETE_NOTES_ERROR,
DELETE_NOTES_LOADING,} from "../actions/notesActions";

const initState = {
  title: "",
  content: "",
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
    id: action.payload.notes.id,
    title: action.payload.notes.title,
    content: action.payload.notes.title,
    notesLoading: false,
    notesError: false,
  }
  case CREATE_NOTES_ERROR:
  return{
    ...state,
    id: "",
    title: "",
    content:"",
    notesLoading: false,
    notesError: true,
  }
  //fetch
  case FETCH_NOTES_SUCCESS:
  return{
    ...state,
    id: action.payload.notes.id,
    title: action.payload.notes.title,
    content: action.payload.notes.title,
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
    id: "",
    title: "",
    content:"",
    notesLoading: false,
    notesError: true,
  }
  case  DELETE_NOTES_SUCCESS:
  return {
    ...state,
    content : state.notes.filter(notes => notes.id !== action.payload.id )
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
  }
}





export default notesReducer;