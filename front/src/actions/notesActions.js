//CREATE
export const CREATE_NOTES_SUCCESS = "CREATE_NOTES_SUCCESS"
const createNotesSuccess = (input) => ({ type: CREATE_NOTES_SUCCESS, payload: input })

export const CREATE_NOTES_ERROR = "CREATE_NOTES_ERROR"
const createNotesError = () => ({ type: CREATE_NOTES_ERROR })

export const CREATE_NOTES_LOADING = "CREATE_NOTES_LOADING"
const createNotesLoading = () => ({ type: CREATE_NOTES_LOADING })
//fetch
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS"
const fetchNotesSuccess = (note) => ({type: FETCH_NOTES_SUCCESS,payload: note})

export const FETCH_NOTES_LOADING = "FETCH_NOTES_LOADING"
const fetchNotesLoading = (note) => ({type: FETCH_NOTES_LOADING})

export const FETCH_NOTES_ERROR = "FETCH_NOTES_ERROR"
const fetchNotesError = () => ({ type: FETCH_NOTES_ERROR })

//UPDATE
export const UPDATE_NOTES_SUCCESS =
"UPDATE_NOTES_SUCCESS"
const updateNotesSuccess = () => ({ type:
UPDATE_NOTES_SUCCESS})

export const UPDATE_NOTES_LOADING =
"UPDATE_NOTES_LOADING"
const updateNotesLoading = () => ({ type:
UPDATE_NOTES_LOADING})

export const UPDATE_NOTES_ERROR =
"UPDATE_NOTES_ERROR"
const updateNotesError = () => ({ type:
UPDATE_NOTES_ERROR})

//DELETE
export const DELETE_NOTES_SUCCESS = "DELETE_NOTES_SUCCESS"
const deleteNotesSuccess = (id) => ({ type: DELETE_NOTES_SUCCESS, payload: id})

export const DELETE_NOTES_ERROR = "DELETE_NOTES_ERROR"
const deleteNotesError = () => ({ type: DELETE_NOTES_ERROR })

export const DELETE_NOTES_LOADING = "DELETE_NOTES_LOADING"
const deleteNotesLoading = () => ({ type: DELETE_NOTES_LOADING })

//THUNK
//CREATE
export const createNotes = (notes) => dispatch => {
  dispatch(
    createNotesLoading()
  )
  fetch('http://localhost:8000/notes', {
    method: 'POST',
    body: JSON.stringify(notes),
    headers: {
      'Content-Type': 'application/json',
      'token' : localStorage.getItem('token')
    }
  })
  .then(res => res.json())
  .then(notes => {
    dispatch(
      createNotesSuccess(notes)
    )
  })
  .catch(err => {
    dispatch(
      createNotesError()
    )
  })
}
//FETCH
export const fetchNotes = (token) => dispatch => {
  dispatch(
    fetchNotesLoading()
  )
  fetch('http://localhost:8000/notes', {
    headers: {
      'Content-Type': 'application/json',
      'token' : localStorage.getItem('token')
    }
  })
  .then(res => res.json())
  .then(notes => {
    
    dispatch(
      fetchNotesSuccess(notes)
    )
  })

  .catch(err => {
    console.log(err)
    dispatch(
      fetchNotesError()
    )
  })
  
}
  //UPDATE
  export const updateNotes = (_id, token) =>
  dispatch => {
    dispatch(
      updateNotesLoading()
    )
    fetch('http://localhost:8000/notes/:id',{
      method: "PUT",
      body: JSON.stringify(_id),
      header: {
        'Content-Type': 'application/json',
        'token' : token
      }
    })
    .then(res => res.json())
    .then(_id => {
      dispatch(
        updateNotesSuccess(_id)
      )
    })
    .catch(err => {
      dispatch(
        updateNotesError()
      )
    })
  }


  //DELETE
  export const deleteNotes = (_id, token) => dispatch => {
    dispatch(
      deleteNotesLoading()
    )
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      body: JSON.stringify(_id),
      headers: {
        'Content-Type': 'application/json',
        'token' : token
      }
    })
    .then(res => res.json())
    .then(_id => {
      dispatch(
        deleteNotesSuccess(_id)
      )
    })
    .catch(err => {
      dispatch(
        deleteNotesError()
      )
    })
  }