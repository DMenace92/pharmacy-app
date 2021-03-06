import {LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR, REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERROR, LOGOUT_SUCCESS} from "../actions/userActions";
const initState = {
  id: "",
  username: "",
  token: "",
  loginLoading: false,
  loginError: false,
  registerError: false
}
const userReducer = (state = initState, action) => {
  switch(action.type) {
    case LOGIN_LOADING:
      return {...state, loginLoading: true}
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        id: action.payload.user.id,
        username: action.payload.user.username,
        token: action.payload.token,
        loginLoading: false,
        loginError: false
      }
      case LOGIN_ERROR:
      window.location.href='/login'
      return {
        ...state,
        id: "",
        username: "",
        token: "",
        loginLoading: false,
        loginError: true
      }
    case REGISTER_LOADING:
      return {
        ...state,
        loginLoading: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerError: false,
        loginLoading: false
      }
    case REGISTER_ERROR:
      return {
        ...state,
        registerError: true
      }
    case LOGOUT_SUCCESS:
    localStorage.removeItem("token")
      return {
        ...state,
        id: "",
        username: "",
        loginLoading: false,
        loginError: false,
        registerError: false
      }
      
    default:
      return state;
  }
}

export default userReducer;