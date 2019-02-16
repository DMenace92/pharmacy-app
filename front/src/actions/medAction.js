//create
export const CREATE_MEDS_SUCCESS = "CREATE_MEDS_SUCCESS"
const createMedsSuccess = (input) => ({ type: CREATE_MEDS_SUCCESS, payload: input })

export const CREATE_MEDS_LOADING = "CREATE_MEDS_LOADING"
const createMedsLoading = (meds) => ({type: CREATE_MEDS_LOADING})

export const CREATE_MEDS_ERROR = "CREATE_MEDS_ERROR"
const createMedsError = () => ({ type: CREATE_MEDS_ERROR })

//fetch
export const FETCH_MEDS_SUCCESS = "FETCH_MEDS_SUCCESS"
const fetchMedsSuccess = (meds) => ({type: FETCH_MEDS_SUCCESS,payload: meds})

export const FETCH_MEDS_LOADING = "FETCH_MEDS_LOADING"
const fetchMedsLoading = (meds) => ({type: FETCH_MEDS_LOADING})

export const FETCH_MEDS_ERROR = "FETCH_MEDS_ERROR"
const fetchMedsError = () => ({ type: FETCH_MEDS_ERROR })

//delete
export const DELETE_MEDS_SUCCESS = "DELETE_MEDS_SUCCESS"
const deleteMedsSuccess = (id) => ({ type: DELETE_MEDS_SUCCESS, payload: id})

export const DELETE_MEDS_ERROR = "DELETE_MEDS_ERROR"
const deleteMedsError = () => ({ type: DELETE_MEDS_ERROR })

export const DELETE_MEDS_LOADING = "DELETE_MEDS_LOADING"
const deleteMedsLoading = () => ({ type: DELETE_MEDS_LOADING })
//thunk
export const createMeds = (meds) => dispatch => {
  dispatch(
    createMedsLoading()
  )
  fetch('http://localhost:8000/medInfo', {
    method: 'POST',
    body: JSON.stringify(meds),
    headers: {
      'Content-Type': 'application/json',
      'token' : localStorage.getItem('token')
    }
  })
  .then(res => res.json())
  .then(meds => {
    dispatch(
      createMedsSuccess(meds)
    )
  })
  .catch(err => {
    dispatch(
      createMedsError()
    )
  })
}

export const fetchMeds = (token) => dispatch => {
  dispatch(
    fetchMedsLoading()
  )
  fetch('http://localhost:8000/medInfo', {
    headers: {
      'Content-Type': 'application/json',
      'token' : localStorage.getItem('token')
    }
  })
  .then(res => res.json())
  .then(meds => {
    console.log(meds)
    dispatch(
      fetchMedsSuccess(meds)
    )
  })
  .catch(err => {
    dispatch(
      fetchMedsError()
    )
  })
  
}
  //DELETE
  export const deleteMeds = (id, token) => dispatch => {
    dispatch(
      deleteMedsLoading()
    )
    fetch('http://localhost:8000/medInfo', {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
        'token' : token
      }
    })
    .then(res => res.json())
    .then(id => {
      dispatch(
        deleteMedsSuccess(id)
      )
    })
    .catch(err => {
      dispatch(
        deleteMedsError()
      )
    })
  }