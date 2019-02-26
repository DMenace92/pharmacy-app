//CREATE
export const CREATE_NOTES_SUCCESS = "CREATE_NOTES_SUCCESS"
const createNotesSuccess = (input) => ({ type: CREATE_NOTES_SUCCESS, payload: input })

export const CREATE_NOTES_ERROR = "CREATE_NOTES_ERROR"
const createNotesError = () => ({ type: CREATE_NOTES_ERROR })

export const CREATE_NOTES_LOADING = "CREATE_NOTES_LOADING"
const createNotesLoading = () => ({ type: CREATE_NOTES_LOADING })
//fetch one
export const FETCH_ONE_NOTE_SUCCESS = "FETCH_ONE_NOTE_SUCCESS"
const fetchOneNoteSuccess = (id) => ({type: FETCH_ONE_NOTE_SUCCESS,payload: id})

export const FETCH_ONE_NOTE_LOADING = "FETCH_ONE_NOTE_LOADING"
const fetchOneNoteLoading = () => ({type: FETCH_ONE_NOTE_LOADING})

export const FETCH_ONE_NOTE_ERROR = "FETCH_ONE_NOTE_ERROR"
const fetchOneNoteError = () => ({ type: FETCH_ONE_NOTE_ERROR })
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
const updateNotesSuccess = (id) => ({ type:
UPDATE_NOTES_SUCCESS, payload:id})

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
    
    dispatch(
      fetchNotesError()
    )
  })
  
}
//FETCH ONE

export const fetchOneNote = (token, _id) => dispatch => {
  dispatch(
    fetchOneNoteLoading()
  )
  fetch('http://localhost:8000/notes' + _id, {
    headers: {
      'Content-Type': 'application/json',
      'token' : localStorage.getItem('token')
    }
  })
  .then(res => res.json())
  .then(_id => {
    
    dispatch(
      fetchOneNoteSuccess(_id)
    )
  })

  .catch(err => {
    console.log(err)
    dispatch(
      fetchOneNoteError()
    )
  })
  
}
  //UPDATE
  
  export const updateNotes = (_id, token) =>
  dispatch => {
    dispatch(
      updateNotesLoading(_id)
    )
    fetch('http://localhost:8000/notes/' +_id,{
      method: "PUT",
      // body: JSON.stringify(id),
      header: {
        'Content-Type': 'application/json',
        'token' : localStorage.getItem('token'),   
      }
    })
    
    .then(res => res.json())
    .then(_id => {
     
      dispatch(
        updateNotesSuccess(_id)
      )
    })
    .catch(err => {
      console.log(err);
      dispatch(
        updateNotesError(err)
      )
    })
  }


  //DELETE
  export const deleteNotes = (_id, token) => dispatch => {
    dispatch(
      deleteNotesLoading(_id)
    )
    fetch('http://localhost:8000/notes/' + _id, {
      method: 'DELETE',
      headers: {
        'token' : localStorage.getItem('token'),
      },
      // body: JSON.stringify(_id),
      // headers: {
      //   'Content-Type': 'application/json',
      //   'token' : token
      // }
    })
    .then(res => res.json())
    .then(id => {
      
      dispatch(
        deleteNotesSuccess(id)
      )
    })
    .catch(err => {
      dispatch(
        deleteNotesError(err)
      )
    })
  }
